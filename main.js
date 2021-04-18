let worker = new Worker("./worker.js");

worker.addEventListener("message", (e)=>{
    // Update the Interface
});

worker.addEventListener("error", (e)=>{
    console.error(e);
    // update Error Interface
});



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