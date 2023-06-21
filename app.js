const express = require('express');
const createError = require('http-errors');
const morgan = require('morgan');
const multer  = require('multer');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.get('/', async (req, res, next) => {
  res.send({ message: 'It works' });
});

const upload=multer({
  storage:multer.diskStorage({
      destination:function(req,file,cb){
          cb(null,"./public/data/uploads")
      },
      filename:function(req,file,cb){
          cb(null,file.fieldname+ "-" +Date.now()+".jpg")
      }
  })
}).single("user_file");
  
app.post('/upload', upload, (req, res) => {
  res.send("File upload");
});

app.get('/stats', async (req, res, next) => {
  res.send('<input type="file" class="form-control-file" name="uploaded_file"/>'
  
  );
});

// const upload = multer({ dest: './public/data/uploads/' })
// app.post('/stats', upload.single('uploaded_file'), function (req, res) {
  
   
//    console.log("uploaded_file", req.body)
// });
app.use('/api', require('./routes/api.route'));
// app.use('/pranali' , require('./routes/mid'));

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 5000);
  res.send({
    status: err.status || 5000,
    message: err.message,
  });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`@ http://localhost:${PORT}`));
