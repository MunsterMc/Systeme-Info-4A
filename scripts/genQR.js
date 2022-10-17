
function createQRCode() {

    const textinput = document.getElementById('user-input').value;
    const QRElement = document.getElementById("qrcode-container");
    // Vider le container du QRCode avant de créer un nouveau QR Code
    // Sinon on a plusieurs QR Codes
    QRElement.innerHTML = "";

    new QRCode(QRElement, {
        text: textinput,
        width: 512,
        height: 512,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });

}