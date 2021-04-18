let detector;

if (!('BarcodeDetector' in self)) {
    console.error('Barcode Detector is not supported by this browser.');
} else {
    BarcodeDetector.getSupportedFormats()
        .then(supportedFormats => {
            console.log(supportedFormats);
            detector = new BarcodeDetector({ formats: supportedFormats });
        }).catch(err => {
            console.error(err);
        });
};


self.addEventListener("message", (e) => {
    if (detector) {
        detector.detect(e.data.image)
            .then(data => {
                console.log(data);
            }).catch(err => {
                console.error(err);
            })
    } else {
        console.log("Something went wrong");
    }
});