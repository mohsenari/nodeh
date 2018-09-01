const nodeh = require('./nodeh.js');


let request = new nodeh();

request.addUrl('http://bing.com').send().then((res) => {
    console.log(res);
});