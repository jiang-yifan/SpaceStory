(function () {
  window.Asteroids = window.Asteroids || {};

  var AtomCollection = Asteroids.AtomCollection = function () {
    this.atoms = [];
  };

  AtomCollection.prototype.push = function (atom) {
    this.atoms.push(atom);
  };

  AtomCollection.prototype.outterShell = function(){
    if(!this._outterShell){
      this.sortAtoms();
      this.findOutterShell();
    }
    return this._outterShell;
  };

  AtomCollection.prototype.sortAtoms = function () {
    this.getLowerRightAtom();
    this.atoms.sort(this.sortFunction.bind(this));
  };

  AtomCollection.prototype.sortFunction = function (P1 , P2) {
    if(P1 == this.atoms[0]){
      return -1;
    }
    var sort = this.isLeft(this.atoms[0], P1, P2)
    if (sort == 0) {
      if(P1.pos.y < P2.pos.y){
        sort = -1;
      } else {
        sort = 1;
      }
    }
    return sort;
  };

  AtomCollection.prototype.isLeft = function (P0, P1, P2) {
    return ( (P1.pos.x - P0.pos.x) * (P2.pos.y - P0.pos.y)
           - (P2.pos.x - P0.pos.x) * (P1.pos.y - P0.pos.y) );
  };

  AtomCollection.prototype.getLowerRightAtom = function () {
    var lowerRightIndex = null;
    var biggestY = null;
    var biggestX = null;
    for (var i = 0; i < this.atoms.length; i++) {
      if(biggestY == null ||
          this.atoms[i].pos.y > biggestY){
        biggestY = this.atoms[i].pos.y;
        biggestX = this.atoms[i].pos.x;
        lowerRightIndex = i;
      } else if (this.atoms[i].pos.y === biggestY &&
            this.atoms[i].pos.x > biggestX){
              debugger;
        biggestX = this.atoms[i].pos.x;
        lowerRightIndex = i;
      }
    }
    debugger;
    this.atoms.unshift(this.atoms.splice(lowerRightIndex, 1)[0]);
  };

  AtomCollection.prototype.findOutterShell = function () {
    this._outterShell = [this.atoms[0], this.atoms[1]];
    var i = 2;
    while (i< this.atoms.length) {
      if (this._outterShell.last() == this.atoms[0]) {
        this._outterShell.push(this.atoms[i]);
        i++;
      }

      if (this.isLeft(
                  this._outterShell[this._outterShell.length - 2],
                  this._outterShell.last(),
                  this.atoms[i]
                ) < 0){
        this._outterShell.push(this.atoms[i]);
        i++;
      } else{
        this._outterShell.pop();
      }
    }
  };

  AtomCollection.prototype.drawAtoms = function(ctx){
    for (var i = 0; i < this.atoms.length; i++) {
      ctx.beginPath();
      ctx.arc(this.atoms[i].pos.x, this.atoms[i].pos.y, 5, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'green';
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
    }
  };

  AtomCollection.prototype.draw = function (ctx) {
    ctx.beginPath();
    ctx.moveTo(this.outterShell()[0].pos.x, this.outterShell()[0].pos.y)
    for (var i = 1; i < this.outterShell().length; i++) {
      ctx.lineTo(this.outterShell()[i].pos.x, this.outterShell()[i].pos.y)
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#ff0000';
      ctx.stroke();
    }
    ctx.lineTo(this.outterShell()[0].pos.x, this.outterShell()[0].pos.y)
    ctx.stroke();
  };

})();
