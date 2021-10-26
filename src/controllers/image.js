const path  = require('path');
const { randomNumber} = require('../helpers/libs');
const fs = require('fs-extra');

const {Image} = require('../models/index');

const ctrl = {};

ctrl.index  = (req, res) => {



};

ctrl.create   =  async (req, res) => {

    const imgUrl = randomNumber();
    console.log(imgUrl);

    const imageTempPath = req.file.path;


//extension de la imagen
    const ext = path.extname(req.file.originalname).toLowerCase();
    const targetPath = path.resolve(`src/public/upload/${imgUrl}${ext}`)


    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
        
        await fs.rename(imageTempPath, targetPath);
        const newImage = new Image({
            title: req.body.title,
            filename: imgUrl + ext,
            descripcion: req.body.descripcion

        });

        const ImageSaved = await newImage.save();
        console.log(newImage);

    }else{
        await fs.unlink(imageTempPath);
        res.status(500).json({error: 'Only Images are allowed'});
    }


res.send('funciona')
};



ctrl.like   =  (req, res) => {

    res.send('Index page');

};
ctrl.comment   =  (req, res) => {

    res.send('Index page');

};
ctrl.remove   =  (req, res) => {

    res.send('Index page');

};

module.exports = ctrl;