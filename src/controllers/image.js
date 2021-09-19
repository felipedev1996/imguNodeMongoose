const ctrl = {};

ctrl.index  = (req, res) => {



};

ctrl.create   =  (req, res) => {

console.log(req.file);
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