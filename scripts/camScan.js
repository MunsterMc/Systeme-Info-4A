function onScanSuccess(decodedText, decodedResult) {
    console.log(`Code scanned = ${decodedText}`, decodedResult);
    //Once scanned, prompt to scan new QR Code and show output
    document.getElementById('outputBox').innerHTML = `<br> Scanned : ${decodedText}`;
    html5QrcodeScanner.clear().then(_ => {
        // the UI should be cleared here
    }).catch(error => {
        // Could not stop scanning for reasons specified in `error`.
        // This conditions should ideally not happen.
        Console.log("Error: " + error);
    });

    
}
var html5QrcodeScanner = new Html5QrcodeScanner(
    "qr-reader", { fps: 5, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess);