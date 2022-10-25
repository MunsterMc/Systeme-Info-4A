screenWidth = window.innerWidth

function onScanSuccess(decodedText, categories) {
    // This is where we get our Scanned QR code
    //console.log(`Code scanned = ${decodedText[0]}`);
    
    var orderScanned = JSON.parse(decodedText);
    console.log(orderScanned);
    for(const [product, quantity] of Object.entries(orderScanned)){
        if (product == "table") {
            pass
        }
        let p = categories[product.toString().slice(0, 1)-1].menu.find(({ id }) => id === parseInt(product))

        let el = document.createElement('span');
        el.innerHTML = "<br />" + p.name + " X" + quantity;
        document.getElementById("commande").appendChild(el);
    }
}


// var html5QrcodeScanner = new Html5QrcodeScanner(
//     "qr-reader", { fps: 24, qrbox: 0.5*screenWidth });
// html5QrcodeScanner.render(onScanSuccess);
fetch("../menu.json").then(res=>res.json()).then(categories=>{

    var html5QrcodeScanner = new Html5Qrcode("qr-reader");
    
    const config = { fps: 20, qrbox: 0.65*screenWidth };
    
    // If you want to prefer back camera
    html5QrcodeScanner.start({ facingMode: "environment" }, config, (decodedText)=>{
        onScanSuccess(decodedText, categories);
        html5QrcodeScanner.stop().then((ignore) => {
            // QR Code scanning is stopped.
            console.log("Successfully stopped the camera.")
            //Create a refresh button to scan next order.
            var refreshBtn = document.createElement('button');
            refreshBtn.className = "buttonRefresh";
            refreshBtn.innerHTML = "Envoyer et continuer";
            refreshBtn.onclick = function() {
                //Send orderScanned to DB on ACTUAL Product
                fetch('lien page php qui recoit la requete', {
                    method: 'post',
                    body: orderScanned//le json,
                }).then(()=>{
                    window.location.reload();
                }).catch(e => {
                    console.log("error", e);
                })
            }
            document.getElementById('outputBox').appendChild(refreshBtn)
        }).catch((err) => {
        // Stop failed, handle it.
        console.log("Error stopping camera: " + err)
        });
    });
});