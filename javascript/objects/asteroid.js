(function(){
  window.Asteroids = window.Asteroids || {};
  var Asteroid = Asteroids.Asteroid = function (asteroidOptions, center) {
    this.center = new Coordinate(center);
    this.atoms = [];
    this.radius = asteroidOptions.radius;
    this.createAtoms(asteroidOptions);
    this.color = 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
  };

  Asteroid.inherits(Asteroids.AtomCollection);

  Asteroid.prototype.createAtoms = function (asteroidOptions) {
    var atoms = asteroidOptions.atoms;
    for (var i = 0; i < atoms; i++) {
      var coord = Coordinate.randomCircleCoord(this.radius);
      new Asteroids.Atom(this, coord.add(this.center));
    };
  };
})();
