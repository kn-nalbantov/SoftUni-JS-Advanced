function reqValidator(req) {
    const availableMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
  
    let hasInvalidMethod = true;
    for (m of availableMethods) {
      if (req.method == m) {
        hasInvalidMethod = false;
      }
    }
    if (hasInvalidMethod || !req.hasOwnProperty('method')) {
      throw Error('Invalid request header: Invalid Method');
    }
  
    const pattern = /^[A-Za-z\.0-9]+$/;
    if (!pattern.test(req.uri) || !req.hasOwnProperty('uri')) {
      throw Error('Invalid request header: Invalid URI');
    }
  
    let hasInvalidVersion = true;
    for (let v of validVersions) {
      if (req.version == v) {
        hasInvalidVersion = false;
      }
    }
    if (hasInvalidVersion || !req.hasOwnProperty('version')) {
      throw Error('Invalid request header: Invalid Version');
    }
    //special chars <, >, \, &, ', "
    if (
      !req.hasOwnProperty('message') ||
      req.message.includes('<') ||
      req.message.includes('>') ||
      req.message.includes('\\') ||
      req.message.includes('&') ||
      req.message.includes("'") ||
      req.message.includes('"')
    ) {
      throw Error('Invalid request header: Invalid Message');
    }
    return req;
  }