(function(){
  window.Util = window.Util || {};

  Util = function(){};

  Util.distance = function(pos1, pos2){
    return Math.sqrt(
      Math.pow(pos2.y - pos1.y, 2) +
      Math.pow(pos2.x - pos1.x, 2)
    );
  };

  Util.isLeft = function (P0, P1, P2) {
    return ( (P1.x - P0.x) * (P2.y - P0.y)
           - (P2.x - P0.x) * (P1.y - P0.y) );
  };

  Util.roundedCircleArea = function(radius){
    return Math.floor(Math.pow(radius, 2) * Math.PI);
  };

  Util.randomPosition = function (radius) {
    var x, y;
    // var vel = this.vel;
    var side = Math.floor(Math.random() * 4);
    if( side === 0 ){
      y = 0 - radius;
      x = Math.random() * Asteroids.Game.DIM_X;
      // vel[1] = Math.abs(vel[1]);
    }else if( side === 1){
      x = 0 - radius;
      y = Math.random() * Asteroids.Game.DIM_Y;
      // vel[0] = Math.abs(vel[0]);
    }else if( side === 2){
      y = Asteroids.Game.DIM_Y + radius;
      x = Math.random() * Asteroids.Game.DIM_X;
      // vel[1] = -1 * Math.abs(vel[1]);
    }else if( side === 3){
      x = Asteroids.Game.DIM_X + radius;
      y = Math.random() * Asteroids.Game.DIM_Y;
      // vel[0] = -1 * Math.abs(vel[0]);
    }
    // this.vel = vel;
    return [x, y];
  };

})();
