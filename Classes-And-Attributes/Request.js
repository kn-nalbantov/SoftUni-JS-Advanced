class Request {
  constructor(method, uri, version, message) {
    this.method = method;
    this.uri = uri;
    this.version = version;
    this.message = message;
    this.response = this._initResponse();
    this.fulfilled = this._initFulfill();
  }

  _initResponse() {
    return undefined;
  }

  _initFulfill() {
    return false;
  }
}

let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);
