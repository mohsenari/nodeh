const axios = require('axios');

class Nodeh {
    constructor() {
        this.baseUrl = "";
        this.path = "";
        this.method = "GET"
        this.data = {};
        this.headers = {};
        this.timeout = 20000;

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

    addTimeout(timeout) {
        this.timeout = timeout;
        return this;
    }

    send() {
        const request = {
            method: this.method,
            url: this.baseUrl + this.path,
            data: this.data
        };
        return axios.request(request)
    }
}

module.exports = Nodeh;