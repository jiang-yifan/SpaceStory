(function () {
  Array.prototype.equal = function (otherArray) {
    var array = this;
    if(!(array.length == otherArray.length)){
      return false;
    }

    for (var i = 0; i < array.length; i++) {
      if(!(array[i] === otherArray[i])){
        return false;
      }
    }

    return true
  };

  Array.prototype.add = function (otherArray) {
    return [this[0] + otherArray[0],
        this[1] + otherArray[1]]
  };
  Array.prototype.clean = function() {
    for (var i = 0; i < this.length; i++) {
      if (!this[i]) {
        this.splice(i, 1);
        i--;
      }
    }
    return this;
  };

  Array.prototype.last = function () {
    return this[this.length - 1]
  };
})();
