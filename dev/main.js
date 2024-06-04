import "rxjs/add/operator/do";
import ImageReader from "../src/readers/ImageReader";
import VideoReader from "../src/readers/VideoReader";
import ImageDataReader from "../src/readers/ImageDataReader";
import inverse from "../src/filters/inverse";
import contrast from "../src/filters/contrast";
import brightness from "../src/filters/brightness";
import linear from "../src/filters/linear";
import { appendToID } from "./utils";
import { GenerateID } from "./utils";
import aa from "../src/aa";
import aalib from "../dist/aalib.js";
import html, { ASCII_CHARSET } from "../src/renderers/HTMLRenderer";
import videoCanvas from "../src/renderers/CanvasRenderer";
import { appendToBody } from "./utils";
import { json } from "body-parser";

const charset = ASCII_CHARSET;
const resource = filename => `../resources/${ filename }`;

const FONTS = {
    Sora: resource("sora-ttf/Sora-Regular.ttf"),
    Kode: resource("kode-mono/KodeMono-Regular.ttf"),
    OpenSans: resource("open-sans/OpenSans-Regular.ttf")
}

const RES = {
    MONA: resource("mona.png"),
    LENNA: resource("lenna.png"),
    MARYLIN: resource("marylin.jpg"),
    BBB: resource("bbb_720x480_30mb.mp4")
};

function pipeline(...args) {
    const src = args.shift();
    args
        .reduce((acc, it) => acc.map(it), src)
        .subscribe();
}

// still adds more images on input 
function mona() {
    pipeline(
        ImageReader.fromURL(RES.MONA), // Reads the image from a URL.
        aa({ width: 200, height: 160, colored: false }), // Converts the image to ASCII art with specified dimensions and color settings.
        html({ charset }), // Renders the ASCII art as HTML using the specified charset.
        render({canvas}),
        appendToBody
    );
}

function monaCanvas() {
    pipeline( 
        ImageReader.fromURL(RES.MONA), // Reads the image from a URL.
        contrast(0.2),
        aa({ width: 500, height: 300 }),
        brightness(10),
        videoCanvas({charset, background:"black"}),
        el => appendToID(el, "generated-image"));
}

function idata() {
    const drawingCanvas = document.createElement("canvas");
    drawingCanvas.width = "320";
    drawingCanvas.height = "240";
    appendToBody(drawingCanvas);

    const ctx = drawingCanvas.getContext("2d");
    ctx.fillStyle = "#222";
    ctx.fillRect(0, 0, 160, 240);
    ctx.fillStyle = "#eee";
    ctx.fillRect(160, 0, 160, 240);
    ctx.fillStyle = "#999";
    ctx.fillRect(160-40, 120-40, 80, 80);

    ImageDataReader.fromCanvas(drawingCanvas)
        .map(aa({ width: 80, height: 25, colored: false }))
        .map(html({ charset }))
        .do(appendToBody)
        .subscribe();
}

function localImage() {
    const filePicker = document.createElement("input");
    filePicker.type = "file";
    filePicker.addEventListener("change", createFileHandler(createAA));

    appendToBody(filePicker);

    function createFileHandler(createAA) {
        return (e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                createAA(e.target.result);
            };

            reader.readAsDataURL(file);
        };
    }

    function createAA(imageUrl) {
        ImageReader.fromURL(imageUrl)
            .map(aa({ width: 210, height: 105, colored: false }))
            .map(html({ charset }))
            .do((el) => {
                filePicker.parentNode.insertBefore(el, filePicker.nextSibling);
            })
            .subscribe();
    }
}

function bbb() {
    const scene = document.createElement("canvas");
    const video = document.createElement("video");
    video.src = "../resources/bbb_720x480_30mb.mp4";
    video.controls = true;

    appendToBody(video);
    appendToBody(scene);

    VideoReader.fromVideoElement(video, { autoplay: false })
        .map(aa({ width: 165, height: 68, colored: true }))
        .map(videoCanvas({
            charset,
            width: 696,
            height: 476,
            el: scene
        }))
        .subscribe();
}

// media recorder and video exporter 
let videoCanvasElement = document.getElementById('video-scene');
let mediaRecorder;
let recordedChunks = [];
setupMediaRecorder(videoCanvasElement);
document.getElementById('startRecording').addEventListener('click', startRecording);
document.getElementById('stopAndDownload').addEventListener('click', stopRecording);
const imageDropdown = document.getElementById('image-dropdown');
let isCanvas = true; 

imageDropdown.onchange = function(){
    isCanvas = this.value === "canvas";
    console.log("iscanvas", isCanvas);
}

function setupMediaRecorder(canvas) {
    const stream = canvas.captureStream(25); // Capture at 25 fps
    mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm; codecs=vp9' });

    mediaRecorder.ondataavailable = function (event) {
        if (event.data.size > 0) {
            recordedChunks.push(event.data);
        }
    };

    mediaRecorder.onstop = function () {
        const blob = new Blob(recordedChunks, {
            type: 'video/mp4'
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'downloaded_video.mp4';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        recordedChunks = []; // Clear the recorded chunks
    };
} 

function startRecording() {
    mediaRecorder.start();
    console.log("Recording started");
}

function stopRecording() {
    mediaRecorder.stop();
    console.log("Recording stopped");
}

// video input 
function fromVideoFile(file) {
    return new Promise((resolve, reject) => {
        const video = document.createElement('video');
        console.log("url ", URL.createObjectURL(file));
        video.src = URL.createObjectURL(file);
        video.controls = true;  // Add controls so users can play/pause
        video.autoplay = true;  // Set autoplay to true to start playing automatically
        video.muted = true;     // Mute the video to allow autoplay in most browsers
        video.loop = true;      // Optional: Loop the video
        video.onloadedmetadata = () => {
            document.getElementById('video-container').appendChild(video);  // Append to a specific container
            resolve(video);
        };
        video.onerror = () => {
            reject(new Error("Failed to load video"));
        };
    });
}

// video input 
document.getElementById('videoInput').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        fromVideoFile(file).then(video => {
            console.log("video", video);
            aalib.read.video.fromVideoElement(video)
                .map(aalib.aa({ width: 165, height: 68 }))
                .map(aalib.render.canvas({
                    width: 696,
                    height: 476,
                    fontFamily: `"${currentFont}", sans-serif`,
                    el: document.querySelector("#video-scene")
                }))
                .subscribe();
        }).catch(error => {
            console.error("Error loading video:", error);
        });
    }
});

// image input 
// image size is the same, but the ascii squished the size 
function loadImageFromURL(img, isCanvas){
    console.log("image size is ", img.width, img.height);
    const aspectRatio = img.width / img.height;
    const aaHeight =165; // Height for ASCII art
    const aaWidth = Math.round(aaHeight * aspectRatio); // Maintain aspect ratio for ASCII art width
    const aaReq = { width: aaWidth, height: aaHeight, colored: false };
    const canvasOptions = {
        fontSize: 7,
        fontFamily: "monospace",
        lineHeight: 7,
        charWidth: 4.2,
        width: img.width,  // Use original image width for canvas
        height: img.height, // Use original image height for canvas
        background: "rgba(0,0,0,0)",
        color: gradient
    };
    console.log("loading image with current font ", currentFont);
    if (isCanvas) {
        aalib.read.image.fromURL(img.src)
        .map(aalib.aa(aaReq))
        .map(aalib.render.canvas(canvasOptions))
        .do(function (el) {
            document.body.appendChild(el);
            // el.id = 'mona-image'; // Set a unique ID for the element
            // const existingElement = document.getElementById('mona-image');
            // if (existingElement) {
            //     document.body.replaceChild(el, existingElement);
            // } else {
            //     document.body.appendChild(el);
            // }
        })
        .subscribe(); 
    } else {
        aalib.read.image.fromURL(img.src)
        .map(aalib.aa(aaReq))
        .map(aalib.render.html({
            canvasOptions
        }))
        .do(function (el) {
            document.body.appendChild(el);
            // el.id = 'mona-image'; // Set a unique ID for the element
            // const existingElement = document.getElementById('mona-image');
            // if (existingElement) {
            //     console.log("should replace chi")
            //     document.body.replaceChild(el, existingElement);
            // } else {
            //     document.body.appendChild(el);
            // }
        })
        .subscribe(); 
    }
}

function handleImageInputChange(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = new Image();
            img.src = e.target.result;
            img.alt = 'Uploaded Image';
            img.onload = function () {
                // Image is loaded and can be manipulated or displayed
                console.log("image on load isCanvas is ", isCanvas);
                loadImageFromURL(img, isCanvas);
            };
        };

        reader.onerror = function () {
            console.error('Error loading the image');
        };

        reader.readAsDataURL(file);
    } else {
        console.error('File is not an image');
    }
}

document.getElementById('imageInput').addEventListener('change', handleImageInputChange);


// gradient
class GradientInfo {
    constructor(color1, color2, color3, colorPosition1, colorPosition2, colorPosition3) {
        this.color1 = color1;
        this.color2 = color2;
        this.color3 = color3;
        this.colorPosition1 = colorPosition1;
        this.colorPosition2 = colorPosition2;
        this.colorPosition3 = colorPosition3;
    }
}

class PresetInfo {
    constructor(inverseEle, desaturate, brightnessEle, contrastEle, desaturation, gradientInfo, fontSize, fontFamily, lineHeight,charWidth) {
        this.inverseEle = inverseEle;
        this.desaturate = desaturate;
        this.brightnessEle = brightnessEle;
        this.contrastEle = contrastEle;
        this.desaturation = desaturation;
        this.gradientInfo = gradientInfo;
        this.fontSize = fontSize;
        this.fontFamily = fontFamily;
        this.lineHeight = lineHeight;
        this.charWidth = charWidth;
    }
}

let gradientCanvas = document.getElementById("gradient-canvas");
let gradientCanvasCTX = gradientCanvas.getContext('2d');
let gcWidth = gradientCanvas.width;
let gcHeight = gradientCanvas.height;
let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let color3 = document.getElementById('color3');
let colorPosition1 = document.getElementById('position1');
let colorPosition2 = document.getElementById('position2');
let colorPosition3 = document.getElementById('position3');
let saveGradientButton = document.getElementById("save-gradient");
let gradientInfo = new GradientInfo();
let presetInfo = new PresetInfo();
let fontFamily = "Sora";
color1.onchange = updateGradient;
color2.onchange = updateGradient;
color3.onchange = updateGradient;
colorPosition1.onchange = updateGradient;
colorPosition2.onchange = updateGradient;
colorPosition3.onchange = updateGradient;
saveGradientButton.onclick =saveGradientToFile;
let gradient;

let savePresetButton = document.getElementById("save-preset");
let desaturate = document.getElementById("desaturate");
let inverseEle = document.getElementById("inverse");
let desaturation = document.getElementById("desaturation");
let brightnessEle = document.getElementById("brightness");
let contrastEle = document.getElementById("contrast");
let fontDropdown = document.getElementById("font-dropdown");
let fontSize = document.getElementById("fontSize");
let charWidth = document.getElementById("charWidth");
let lineHeight = document.getElementById("lineHeight");

let brightnessValue = brightnessEle.parentElement.querySelector(".sliderValue");
let contrastValue = contrastEle.parentElement.querySelector(".sliderValue");
let desaturationValue = desaturation.parentElement.querySelector(".sliderValue");

brightnessEle.oninput = (e) => {
    brightnessValue.innerHTML = e.target.value;
}
contrastEle.oninput=(e)=>{
    contrastValue.innerHTML = e.target.value;
}

desaturation.oninput=(e)=>{
    desaturationValue.innerHTML = e.target.value;
}

savePresetButton.onclick= savePresetToFile;

desaturate.onchange=(e)=>{
    presetInfo.desaturate = e.target.value;
    console.log("preset info is ", presetInfo.desaturate);

}
// called after updatePreset and apply it to the image or video 
function applyPreset(){

    


    
}
function updateGradient(){
    console.log("update gradient");
    gradient = gradientCanvasCTX.createLinearGradient(0, 0, gcWidth, 0);
    gradient.addColorStop(colorPosition1.value/100, color1.value);
    gradient.addColorStop(colorPosition2.value/100, color2.value);
    gradient.addColorStop(colorPosition3.value/100, color3.value);
    gradientCanvasCTX.fillStyle = gradient;
    gradientCanvasCTX.fillRect(0, 0, gcWidth, gcHeight);
}

function updatePreset(){
    console.log("update preset");
    if(desaturate.value!=presetInfo.desaturate){
        desaturate.value = presetInfo.desaturate;
    }
    if(brightnessEle.value!=presetInfo.brightnessEle){
        brightnessEle.value = presetInfo.brightnessEle;
    }
    if(contrastEle.value!=presetInfo.contrastEle){
        contrastEle.value = presetInfo.contrastEle;
    }
    if(desaturation.value!=presetInfo.desaturation){
        desaturation.value = presetInfo.desaturation;
    }
    if(inverseEle.value!=presetInfo.inverseEle){
        inverseEle.value = presetInfo.inverseEle;     
    }
    if(fontSize.value!=presetInfo.fontSize){
        fontSize.value = presetInfo.fontSize;
    }
    if(fontFamily!=presetInfo.fontFamily){
        fontFamily = presetInfo.fontFamily;
    }
    if(lineHeight.value!=presetInfo.lineHeight){
        lineHeight.value = presetInfo.lineHeight;
    }
    if(charWidth.value!=presetInfo.charWidth){
        charWidth.value = presetInfo.charWidth;
    }
    if(gradientInfo!=presetInfo.gradientInfo){
        gradientInfo = presetInfo.gradientInfo;
    }
    console.log("preset info is ", presetInfo);

}
function loadGradient(){
    console.log("load gradient");
    colorPosition1.value = gradientInfo.colorPosition1;
    colorPosition2.value = gradientInfo.colorPosition2;
    colorPosition3.value = gradientInfo.colorPosition3;
    color1.value = gradientInfo.color1;
    color2.value = gradientInfo.color2;
    color3.value = gradientInfo.color3;
}

function saveGradient() {
    savedGradient = gradientCanvasCTX.fillStyle;
    gradientInfo.color1 = color1.value;
    gradientInfo.color2 = color2.value;
    gradientInfo.color3 = color3.value;
    gradientInfo.colorPosition1 = colorPosition1.value;
    gradientInfo.colorPosition2 = colorPosition2.value;
    gradientInfo.colorPosition3 = colorPosition3.value;

}

function loadPreset(){
    console.log("load preset");
    console.log("in load preset, inverse value is ", inverseEle.checked);
    inverseEle.checked = presetInfo.inverseEle;
    desaturate.checked = presetInfo.desaturate;
    brightnessEle.value = presetInfo.brightnessEle;
    contrastEle.value = presetInfo.contrastEle;
    desaturation.value = presetInfo.desaturation;
    gradientInfo = presetInfo.gradientInfo;
    loadGradient();
    updateGradient();
    // loadSliderValues(presetInfo);
updatePreset();
    console.log("preset info is ", presetInfo);
    brightnessValue.innerHTML = presetInfo.brightnessEle;
    contrastValue.innerHTML = presetInfo.contrastEle;
    desaturationValue.innerHTML = presetInfo.desaturation;

    fontSize.value = presetInfo.fontSize;
    fontFamily = presetInfo.fontFamily;
    lineHeight.value = presetInfo.lineHeight;
    charWidth.value = presetInfo.charWidth;
}
function savePreset(){
    console.log("save preset ", presetInfo);
    presetInfo.inverseEle = inverseEle.checked;
    presetInfo.desaturate = desaturate.checked;
    presetInfo.brightnessEle = brightnessEle.value;
    presetInfo.contrastEle = contrastEle.value;
    presetInfo.desaturation = desaturation.value;
    presetInfo.gradientInfo = gradientInfo;
    saveGradient();
    presetInfo.fontSize = fontSize.value;
    presetInfo.fontFamily = fontFamily;
    presetInfo.lineHeight = lineHeight.value;
    presetInfo.charWidth = charWidth.value;

}

function savePresetToFile(){
    savePreset();
    const presetData = JSON.stringify(presetInfo);
    const blob = new Blob([presetData], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'presetInfo.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log("Preset saved to file.");
}


function saveGradientToFile() {
    saveGradient();
    const gradientData = JSON.stringify(gradientInfo);
    const blob = new Blob([gradientData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'gradientInfo.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log("Gradient saved to file.");
}

// needs to update in the preset info values as well - UI 
function loadPreetFromFile(file){
    const reader = new FileReader();
    reader.onload = function(event){
        const data = JSON.parse(event.target.result);
        console.log("data",data);
        presetInfo.brightnessEle = data.brightnessEle;
        presetInfo.desaturation = data.desaturation;
        presetInfo.contrastEle = data.contrastEle;
        presetInfo.desaturate = data.desaturate;
        presetInfo.inverseEle = data.inverseEle;
        presetInfo.gradientInfo = data.gradientInfo;
        presetInfo.fontSize = data.fontSize;
        presetInfo.fontFamily = data.fontFamily;
        presetInfo.lineHeight = data.lineHeight;
        presetInfo.charWidth = data.charWidth;
        console.log("preset loaded from file: ",presetInfo);
        loadPreset();
    }
    reader.readAsText(file);
}

function loadGradientFromFile(file) {
    const reader = new FileReader();
    reader.onload = function(event) {
        const data = JSON.parse(event.target.result);
        console.log(" data",data);
        gradientInfo.color1 = data.color1;
        gradientInfo.color2 = data.color2;
        gradientInfo.color3 = data.color3;
        gradientInfo.colorPosition1 = data.colorPosition1;
        gradientInfo.colorPosition2 = data.colorPosition2;
        gradientInfo.colorPosition3 = data.colorPosition3;
        loadGradient();
        updateGradient();
        console.log("Gradient loaded from file.");
    };
    reader.readAsText(file);
}

const fileInput = document.getElementById('gradient-file-input');
fileInput.type = 'file';
fileInput.addEventListener('change', function() {
    if (this.files && this.files[0]) {
        console.log("file", this.files[0]);
        loadGradientFromFile(this.files[0]);
    }
});


const presetFileInput = document.getElementById('load-preset');
presetFileInput.type = 'file';
presetFileInput.addEventListener('change', function() {
    if (this.files && this.files[0]) {
        console.log("file", this.files[0]);
        loadPreetFromFile(this.files[0]);
    }
});


function loadSliderValues(presetInfo){
    brightnessValue.innerHTML = presetInfo.brightnessEle;
    contrastValue.innerHTML = presetInfo.contrastEle;
    desaturationValue.innerHTML = presetInfo.desaturation;
}

inverseEle.onchange = (e) => {
    presetInfo.inverseEle = e.target.checked;
    console.log("Inverse element is now", presetInfo.inverseEle ? "enabled" : "disabled");
}
desaturate.onchange=(e)=>{
    presetInfo.desaturate = e.target.checked;
    console.log("Desaturate element is now", presetInfo.desaturate ? "enabled" : "disabled");
}
charWidth.onselect=(e)=>{
    presetInfo.charWidth = e.target.value;
    console.log("preset info is ", presetInfo.charWidth);
}

lineHeight.onselect=(e)=>{
    presetInfo.lineHeight = e.target.value;
}

function selectFont(fontName) {
    const font = FONTS[fontName];
    if (!font) {
        console.error(`Font ${fontName} is not available.`);
        return;
    }
    return font;
}

let currentFont; 

fontDropdown.onchange = (e) => {
    currentFont =e.target.value;
    console.log("current font ", currentFont);
    // apply font in the text for the image and video reader 
};


brightnessEle.onchange=monaCanvas;
desaturation.onchange=monaCanvas;
contrastEle.onchange =monaCanvas;

