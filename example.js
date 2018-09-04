const nodeh = require('./nodeh.js');


let request = new nodeh();

// request
//     .addUrl('http://bing.com')
//     .send()
//     .then( (res) => { console.log(res.data) } );

request
    .addUrl('https://reqres.in')
    .addPath('/api/users')
    .addMethod('POST')
    .addHeaders({"Accept": "application/json"})
    .addData({
        name: "Channing Tatum",
        quote: "My name is Jeff"
    })
    .send()
    .then( res => {console.log(res.data)});
