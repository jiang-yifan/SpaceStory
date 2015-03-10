(function(){
  Number.prototype.between  = function (min, max) {
    return this > min && this < max;
  };

})();
