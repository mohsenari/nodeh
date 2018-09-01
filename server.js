const axios = require('axios');

export class Nodeh {
    constructor() {
        this.baseUrl = "";
        this.path = "";
        this.method = "GET"
        this.data = {};
        this.headers = {};

    }

    addUrl (url) {
        this.baseUrl = url;
        return this;
    }

    addPath(path) {
        this.path = path;
        return this;
    }

    addMethod(method) {
        this.method = method;
        return this;
    }

    addData(data) {
        this.data = data;
        return this;
    }

    addHeaders(headers) {
        this.headers = headers;
        return this;
    }

    send() {
        axios.request({
            method: this.method,
            url: this.baseUrl + this.path,
            data: this.data
        })
    }
}