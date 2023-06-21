const fs = require('fs');
const pkcs7sign = require('pkcs7-signature');

// Load the PDF to be signed
const pdfBuffer = fs.readFileSync('input.pdf');

// Load the private key and certificate
const privateKey = fs.readFileSync('private.key');
const certificate = fs.readFileSync('certificate.pem');

// Sign the PDF
const signedPdfBuffer = pkcs7sign.sign(pdfBuffer, {
  privateKey: privateKey,
  certificate: certificate,
});

// Save the signed PDF
fs.writeFileSync('output.pdf', signedPdfBuffer);

module.exports();
