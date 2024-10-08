const generateBtn = document.getElementById("generate-btn");
const downloadBtn = document.getElementById("download-btn");
const urlInput = document.getElementById("url-input");
const sizeSelect = document.getElementById("size-select");
const qrCodeContainer = document.getElementById("qr-code");

let qrCode = new QRCodeStyling({
    width: 200,
    height: 200,
    type: "svg",  // Initial format
    data: "",
});

// Generate QR Code
generateBtn.addEventListener("click", () => {
    const url = urlInput.value;
    const size = parseInt(sizeSelect.value);

    if (!url) {
        alert("Please enter a valid URL.");
        return;
    }

    // Update the QR code with the new data and size
    qrCode.update({
        data: url,
        width: size,
        height: size,
        type: "png"  // Ensure the QR code is generated as a PNG
    });

    // Clear previous QR code (if any)
    qrCodeContainer.innerHTML = "";

    // Append the generated QR code
    qrCode.append(qrCodeContainer);

    // Show the download button
    downloadBtn.style.display = "block";
});

// Download QR Code as PNG
downloadBtn.addEventListener("click", () => {
    qrCode.download({
        name: "qr-code",
        extension: "png"
    });
});
