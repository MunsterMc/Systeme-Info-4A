document.getElementById("user-input")
    .addEventListener("keypress", function(event) {
    event.preventDefault();
    if ( event.key === "Enter" ) {
        document.getElementById("btn").click();
    }
});

function createQRCode() {

    const textinput = document.getElementById('user-input').value;
    const QRElement = document.getElementById("qrcode-container");
    // Vider le container du QRCode avant de créer un nouveau QR Code
    // Sinon on a plusieurs QR Codes
    QRElement.innerHTML = "";

    new QRCode(QRElement, {
        text: textinput,
        width: 512, // à modifier plus tard
        height: 512, // à modifier plus tard
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });

}