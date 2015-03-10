(function () {
  Vector = function(coords){
    this.y = coords[0];
    this.x = coords[1];
    this.magnitude = this.roundedMagnitude();
  }

  Vector.randomVec = function (max, min){
    var coords = [Math.random()*(max-min) + min,
      Math.random()*(max-min) + min];
    return new Vector(coords);
  };

  Vector.randomCircleVec = function (radius) {
    var y = Math.floor(Math.random()*(2 * radius) - radius);
    var maxX = Math.floor(Math.pow(Math.pow(radius, 2) - Math.pow(y, 2), .5));
    var x = Math.floor(Math.random() *(2 *maxX) - maxX);
    return new Vector([y,x]);
  }

  Vector.prototype.add = function (vector) {
    return new Vector([this.y + vector.y, this.x + vector.x]);
  };

  Vector.prototype.roundedMagnitude = function(){
    return Math.floor( Math.sqrt(
      Math.pow(this.x, 2) +
      Math.pow(this.y, 2))
      );
  };

})();
