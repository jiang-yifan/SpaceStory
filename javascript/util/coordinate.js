(function () {
  Coordinate = function(coords){
    this.y = coords[0];
    this.x = coords[1];
  }

  Coordinate.randomCircleCoord = function (radius) {
    var y = Math.floor(Math.random() * (2 * radius) - radius);
    var maxX = Math.floor(Math.pow(Math.pow(radius, 2) - Math.pow(y, 2), .5));
    var x = Math.floor(Math.random() *(2 * maxX) - maxX);
    return new Coordinate([y,x]);
  }

  Coordinate.prototype.add = function (coordinate) {
    return new Coordinate([this.y + coordinate.y, this.x + coordinate.x]);
  };
})();
