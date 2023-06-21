const router = require('express').Router();
const { response } = require('express');
const { createHash } = require('../utils/hash');
// const { signPdf } = require('../utils/pdfsign');
const fs = require('fs');
// const path=require('path');
const moment = require('moment')
const multer = require('multer');

const uploadFile = multer({ dest: './public/data/uploads/' });

router.post('/createHashing', uploadFile.array('file', 25), async (req, res) => {

  let hashArray = [];
  if (req.files.length > 0) {
    for (let imageData of req.files) {

      // Extension
      let extension = imageData.originalname.split('.').pop();

      // Generate Old Name from File System
      let oldName = `D:/PProjects/test/public/data/uploads/${imageData.filename}`

      fs.rename(oldName, `${oldName}.${extension}`, () => {
        console.log("\nFile Renamed!\n");
      });

      let file = `public/data/uploads/${imageData.filename}.${extension}`
      let hash = await createHash('sha1', file);
      let currentdate = moment().format('DD-MM-YYYY');
      console.log("CurrentDate", currentdate);
  
      let newHash = hash + currentdate;
  
      console.log("NewHash -> ", newHash);

      hashArray.push(newHash);

    }

    if (hashArray.length > 0) {

      for (let hash of hashArray) {

        console.log("Hash", hash);
        contract.methods.storeHash(newhash).send({ from: "0x3aB0d75378329F2c0D08632F936A64a546221e89", gas: 141433 });

      }
    }

    // res.status(200).json({message : "Sucess", hashes : hashArray});

  } else {
    console.log("No files to loop around");
  }
})



router.post('/createhash', uploadFile.single('file'), async (req, res, next) => {
  try {

    // signed a pdf or any file (.zip, .pdf, .rar)

    // let fileName = req.file


    console.log("Pranali", req.file);


    let extension = req.file.originalname.split('.').pop()
    console.log("Extension", extension);
    let oldName = `D:/PProjects/test/public/data/uploads/${req.file.filename}`
    fs.rename(oldName, `${oldName}.${extension}`, () => {
      console.log("\nFile Renamed!\n", req.file);
    });

    let file = `public/data/uploads/${req.file.filename}.${extension}`
    console.log("@@@@@", req.file.filename);
    let hash = await createHash('sha1', file);
    console.log(`Hash created: ${hash}`);

    res.status(200).send({ message: 'Hash created', hash: hash });

  } catch (error) {
    console.log(`Error in createhash: ${error}`);
    res.status(500).send({ message: 'Error in createhash', error: error });
  }
})



const upload = multer({ dest: './public/data/uploads/' })
router.post('/stats', upload.single('uploaded_file'), function (req, res) {


  console.log("Uploaded_file", req.file)
});

const PDFDocument = require('pdf-lib').PDFDocument;

async function signPdf(pdfBuffer) {
  const pdfDoc = await PDFDocument.load(pdfBuffer);
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const pages = pdfDoc.getPages();
  const page = pages[0];
  const { width, height } = page.getSize();
  page.drawText('Signed by Example', {
    x: width / 2, y: height - 50, size: 24, font: timesRomanFont, color: rgb(0, 0, 0), align: 'center',
  });

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}


const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:8545"));
const contractAddress = "0xE042218BE19490Cf32f63D291fd97A7dd86cF997";
const contractABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "storedHash",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "hash",
        "type": "bytes32"
      }
    ],
    "name": "storeHash",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getStoredHash",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];
const contract = new web3.eth.Contract(contractABI, contractAddress);

router.post('/sign-pdf', uploadFile.array('file', 25), async (req, res) => {

  let hashArray = [];
  if (req.files.length > 0) {
    for (let imageData of req.files) {

      // Extension
      let extension = imageData.originalname.split('.').pop();

      // Generate Old Name from File System
      let oldName = `D:/PProjects/test/public/data/uploads/${imageData.filename}`

      fs.rename(oldName, `${oldName}.${extension}`, () => {
        console.log("\nFile Renamed!\n");
      });

      let file = `public/data/uploads/${imageData.filename}.${extension}`
      let hash = await createHash('sha1', file);

      console.log("moment", moment());
      let currentdate = moment().format('DD/MM/YYYY HH:mm:ss');
      console.log("CurrentDate", currentdate);
  
      let newHash = hash + currentdate;
  
      console.log("NewHash -> ", newHash);

      hashArray.push(newHash);

    }

     if (hashArray.length > 0) {

      for (let hash of hashArray) {

        console.log("Hash##", hash);

        hash = "0x"+hash;

        contract.methods.storeHash(hash).send({ from: "0x53A9fe1b2567F8880fe2F8e99A120D1f05Ee8795", gas: 105687 });
      
      }
    }

  } else {
    console.log("No files to loop around");
  }

})
  
module.exports = router;
