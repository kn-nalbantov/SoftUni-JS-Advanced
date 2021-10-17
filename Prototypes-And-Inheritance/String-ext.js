(function solve() {
  String.prototype.ensureStart = function (str) {
    if (this.substring(0, str.length) == str) {
      return this.toString();
    } else {
      return str + this.toString();
    }
  };

  String.prototype.ensureEnd = function (str) {
    if (this.endsWith(str)) {
        return this.toString();
    } else {
        return this.toString() + str;
    }
  };

  String.prototype.isEmpty = function() {
      return this.length == 0;
  }

  String.prototype.truncate = function(n) {
      if (this.length <= n) {
          return this.toString();
      }
      if (this.length < 4) {
          let str = this.substr(0, this.length - n);
          str = str + '.'.repeat(n);
          return str;
      } else {
          const split = this.split(' ');
          if (split.length == 1) {
              return this.substr(0, n - 3) + '...';
          } else {
              let result = '';
              for (let i=0; i<split.length; i++) {
                  if (result.length + split[i].length <= n - 3) {
                      result += ' ' + split[i];
                  } else {
                      return result.trim() + '...';
                  }
              }
              return result + '...';
          }
      }
  }

  String.format = function(str, ...params) {
      let result = str;

      for (let i=0; i<params.length; i++) {
          result = result.replace(`{${i}}`, params[i]);
      }
      return result
  }

})();
