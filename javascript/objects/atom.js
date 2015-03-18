(function () {
  window.Asteroids = window.Asteroids || {};

  Asteroids.Atom = function(atomCollection, pos){
    this.pos = pos;
    atomCollection.push(this);
  };
})();
