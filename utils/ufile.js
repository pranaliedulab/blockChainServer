const multer=require ('multer');

module.exports={
stats: upload=multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"./public/data/uploads")
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+ "-" +Date.now()+".jpg")
        }
    }).single("user_file")
    
    }
)
}