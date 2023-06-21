// import { PDFDocument } from 'pdf-lib'

const PDFDocument = require('pdf-lib').PDFDocument; 


module.exports={

signPdf: async function signPdf(pdfBuffer) { 
    const pdfDoc = await PDFDocument.load(pdfBuffer); 
},

signPdf : async () => {
    page.drawText('Signed by Eg', { 
        x: width / 2, 
        y: height - 50, 
        size: 24, 
        font: timesRomanFont, 
        color: rgb(0, 0, 0), 
        align: 'center', 
    });
}
}





