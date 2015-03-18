(function(){
  window.Asteroids = window.Asteroids || {};
  var Asteroid = Asteroids.Asteroid = function (asteroidOptions, center) {
    this.center = new Coordinate(center);
    this.atoms = [];
    this.createAtoms(asteroidOptions);
  };

  Asteroid.inherits(Asteroids.AtomCollection);

  Asteroid.prototype.createAtoms = function (asteroidOptions) {
    var radius = asteroidOptions.radius;
    for (var i = 0; i < 50; i++) {
      var vec = Coordinate.randomCircleCoord(radius);
      new Asteroids.Atom(this, vec.add(this.center));
    };
  };
})();
