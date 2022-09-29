import { $, $$, log } from "./helperFunctions.js";

let worker = new Worker("./worker.js");

worker.addEventListener("message", (e) => {
  log(e.data);
});

worker.addEventListener("error", (e) => {
  console.error(e);
  // update Error Interface
});

$("#filePick").addEventListener("change", function (e) {
  let file = this.files[0];
  worker.postMessage({
    image: file
  });
});

$("#testImage").addEventListener("click", function(e){
    let getWidth = $("img").width;
    let getHeight = $("img").height;

    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = getWidth;
    canvas.height = getHeight;

    ctx.drawImage($("img"), getWidth, getHeight);
    let imgData = ctx.createImageData(getWidth, getHeight, {colorSpace : "srgb"});

    worker.postMessage({
        image : imgData
    })
})

