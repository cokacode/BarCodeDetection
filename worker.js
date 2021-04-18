if (!('BarcodeDetector' in globalThis)) {
    console.error('Barcode Detector is not supported by this browser.');
} else {
    BarcodeDetector.getSupportedFormats()
        .then(supportedFormats => {
            let detector = new BarcodeDetector({ formats: supportedFormats });


        }).catch(err => {
            console.error(err)
        })
}