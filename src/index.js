const express = require('express');
// const app = express();







const config =  require('./server/config');

require('./database');

const app = config(express());


app.listen(app.get('port'), () => {
    console.log(`Server started on port ${app.get('port')}`);
});

