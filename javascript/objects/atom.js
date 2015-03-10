(function () {
  window.Asteroids = window.Asteroids || {};

  Asteroids.Atom = function(atomCollection, pos){
    this.pos = pos;
    this.atomCollection = atomCollection;
    this.atomCollection.push(this);
  };
})();
