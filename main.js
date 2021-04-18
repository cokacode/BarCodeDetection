let worker = new Worker("./worker.js");

worker.addEventListener("message", (e)=>{
    console.log(e.data);
});

worker.addEventListener("error", (e)=>{
    console.error(e);
    // update Error Interface
});

document.querySelector("input").addEventListener("change", (e)=>{
    // console.log(document.querySelector("input").files[0]);
    worker.postMessage({
        image : document.querySelector("input").files[0]
    });
})




// (function () {
//     if (!('BarcodeDetector' in window)) {
//         alert('Barcode Detector is not supported by this browser.');
//         // NotSuppoted();
//     } else {
//         BarcodeDetector.getSupportedFormats()
//             .then(supportedFormats => {
//                 let detector = new BarcodeDetector({ formats: supportedFormats });
//                 detector.detect(blob);
//             }).catch(err => {
//                 console.error(err)
//             })
//     }
// })()