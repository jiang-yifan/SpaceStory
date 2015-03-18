(function () {
  Vector = function(coords){
    this.y = coords[0];
    this.x = coords[1];
    this.magnitude = this.roundedMagnitude();
  };

  Vector.randomVec = function (max, min){
    var coords = [Math.random()*(max-min) + min,
      Math.random()*(max-min) + min];
    return new Vector(coords);
  };

  Vector.createVec = function(coord1, coord2){
    var y = coord2.y - coord1.y;
    var x = coord2.x - coord1.x;
    return new Vector([y,x]);
  };

  Vector.prototype.normal = function (){
    return new Vector([this.x, -this.y]);
  };

  Vector.prototype.add = function (vector) {
    this.y + vector.y;
    this.x + vector.x;
  };

  Vector.prototype.roundedMagnitude = function(){
    return Math.floor( Math.sqrt(
      Math.pow(this.x, 2) +
      Math.pow(this.y, 2))
      );
  };

  Vector.prototype.dot = function (projection) {
    return this.x * projection.x/projection.magnitude +
            this.y * projection.y/projection.magnitude
  };
})();
