const path = require("path");
const { randomNumber } = require("../helpers/libs");
const fs = require("fs-extra");

const { Image } = require("../models/index");

const ctrl = {};

ctrl.index = async (req, res) => {

const image = await Image.findOne({filename: {$regex :req.params.image_id}}).lean();


console.log(image);
  res.render('image',{image});
};

ctrl.create = (req, res) => {
  const saveImage = async () => {
    const imgUrl = randomNumber();
    const images = await Image.find({filename: imgUrl})
  
    if (images.length > 0) {
        saveImage();
        
    }else{
        // console.log(imgUrl);

        const imageTempPath = req.file.path;
        //extension de la imagen
        const ext = path.extname(req.file.originalname).toLowerCase();
        const targetPath = path.resolve(`src/public/upload/${imgUrl}${ext}`);
    
        if (ext === ".png" || ext === ".jpg" || ext === ".jpeg" || ext === ".gif") {
          await fs.rename(imageTempPath, targetPath);
          const newImg = new Image({
            title: req.body.title,
            filename: imgUrl + ext,
            descripcion: req.body.descripcion,
          });
    
          const ImageSaved = await newImg.save();
           res.redirect(`./images/${imgUrl}`);
        // res.send('work!');

          // console.log(newImg);
        } else {
          await fs.unlink(imageTempPath);
          res.status(500).json({ error: "Only Images are allowed" });
        }
    
      };

    }
    
  saveImage();
 
};

ctrl.like = (req, res) => {
  res.send("Index page");
};
ctrl.comment = (req, res) => {
  res.send("Index page");
};
ctrl.remove = (req, res) => {
  res.send("Index page");
};

module.exports = ctrl;
