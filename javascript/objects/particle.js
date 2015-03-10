(function(){
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Particle = Asteroids.Particle = function(options){
    Asteroids.MovingObject.call(this, {
      color: (options.color || Asteroids.Asteroid.COLOR),
      radius:  (options.radius || Asteroids.Asteroid.RADIUS),
      pos: (options.pos),
      health: null,
      density: (Asteroids.Particle.density)
    });
  }

  Particle.inherits(Asteroids.MovingObject);
  Particle.density = 1;
  Particle.RADIUS = 1;
  Particle.COLOR = "yellow";

  Particle.spawnParticles = function (number, pos){
    var newParticles = [];
    var pos = pos;
    for (var i = 0; i < number; i++) {
      var newParticle = new Particle({pos: pos})
        newParticles.push(newParticle);
    }

    return newParticles;
  };

})();
