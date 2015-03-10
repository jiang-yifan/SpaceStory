(function(){
  var Asteroids = window.Asteroids = window.Asteroids || {};
  var MovingObject = Asteroids.MovingObject = function(options){
    this.velVec = options.velVec || Vector.randomVec(10, -10);
    this.speed = this.velVec.magnitude;
    this.radius = options.radius;
    this.pos = options.pos ||
        new Vector(Util.randomPosition(this.radius));
    this.color = options.color;
    this.health = options.health;
    this.density = options.density;
    this.area = options.area || Util.roundedCircleArea(this.radius);
    this.momentum = Physics.momentum(this.density, this.area, this.speed);
    this.kineticEnergy = Physics.kineticEnergy(this.momentum, this.speed);
    this.atomCollection = new Asteroids.AtomCollection();
  };

  MovingObject.prototype.collidesWith = function(that) {
    return (this.radius + that.radius >
        Util.distance(this.pos, that.pos));
  };

  MovingObject.prototype.move = function () {
    this.pos = this.pos.add(this.velVec);
  };

  MovingObject.prototype.outBounds = function() {
    if(!this.pos.y.between(0 - this.radius,
        Asteroids.Game.DIM_X + this.radius)){
      return true;
    }
    if (!this.pos.x.between(0 - this.radius,
        Asteroids.Game.DIM_Y + this.radius)){
      return true;
    }
    return false;
  };

  MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos.y,
      this.pos.x,
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

})();
