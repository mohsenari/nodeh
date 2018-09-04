# Nodeh

Nodeh (pronounced node-h) is a simple utility class that wraps Axios' HTTP request module to simplify the usage by chaining methods which at then end, the code is readable and easy to understand.

## Installation

```js
npm i Nodeh
```

## Usage

Nodeh is a class so you need to import and then instantiate it. Then the methods can be chained together to complete an HTTP request.
```js
const nodeh = require('nodeh');


// example 1: GET request
let get_request = new nodeh();
get_request
    .addUrl('http://bing.com')                           //add the url of the request
    .send()                                              //send the request
    .then( (result) => { console.log(result.data) } )    //what happens on success
    .catch( (error) => { console.log(error) } )          //what happens on error

// example 2: POST request
let post_request = new nodeh();
request
    .addUrl('https://reqres.in')                         //can also use addUrl('https://reqres.in/api/user')
    .addPath('/api/users')                               //and don't call addPath('/api/users')
    .addMethod('POST')
    .addHeaders({"Accept": "application/json"})
    .addData({
        name: "Channing Tatum",
        quote: "My name is Jeff"
    })
    .send()
    .then( result => { console.log(result.data) } )
    .catch( error => { console.log(error) } )
```
---
Go ahead and give it a try :)

Please let me know of any feedback at [@mohsenari](https://twitter.com/mohsenari) on Twitter or [@mohsenari](https://github.com/mohsenari) on Github.