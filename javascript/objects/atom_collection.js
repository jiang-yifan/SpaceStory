(function () {
  window.Asteroids = window.Asteroids || {};

  var AtomCollection = Asteroids.AtomCollection = function () {
    this.atoms = [];
  };

  AtomCollection.prototype.push = function (atom) {
    this.atoms.push(atom);
  };

  AtomCollection.prototype.outerShell = function(){
    if(!this._outerShell){
      this.sortAtoms();
      this.findOuterShell();
    }
    return this._outerShell;
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
        biggestX = this.atoms[i].pos.x;
        lowerRightIndex = i;
      }
    }
    var temp = this.atoms[0];
    this.atoms[0] = this.atoms[lowerRightIndex];
    this.atoms[lowerRightIndex] = temp;
  };

  AtomCollection.prototype.findOuterShell = function () {
    this._outerShell = [this.atoms[0], this.atoms[1]];
    var i = 2;
    while (i< this.atoms.length) {
      if (this._outerShell.last() == this.atoms[0]) {
        this._outerShell.push(this.atoms[i]);
        i++;
      }

      if (this.isLeft(
                  this._outerShell[this._outerShell.length - 2],
                  this._outerShell.last(),
                  this.atoms[i]
                ) < 0){
        this._outerShell.push(this.atoms[i]);
        i++;
      } else{
        this._outerShell.pop();
      }
    }
  };

  AtomCollection.prototype.drawAtoms = function(ctx){
    for (var i = 0; i < this.atoms.length; i++) {
      ctx.beginPath();
      ctx.arc(this.atoms[i].pos.x, this.atoms[i].pos.y, 3, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'green';
      ctx.fill();
      ctx.closePath();
    }
  };

  AtomCollection.prototype.draw = function (ctx) {
    ctx.beginPath();
    ctx.moveTo(this.outerShell()[0].pos.x, this.outerShell()[0].pos.y)
    for (var i = 1; i < this.outerShell().length; i++) {
      ctx.lineTo(this.outerShell()[i].pos.x, this.outerShell()[i].pos.y)
      ctx.lineWidth = 1;
      ctx.strokeStyle = this.color;
      ctx.stroke();
    }
    ctx.lineTo(this.outerShell()[0].pos.x, this.outerShell()[0].pos.y)
    ctx.stroke();
  };

  AtomCollection.prototype.normals = function () {
    if(!this._normals){
      this.getNormals();
    }
    return this._normals
  };

  AtomCollection.prototype.getNormals = function () {
    var len = this.outerShell().length;
    this._normals = [] ;
    for (var i = 0; i < len - 1; i++) {
      var vector = Vector.createVec(this.outerShell()[i].pos, this.outerShell()[i+1].pos);
      this._normals.push(vector.normal());
    }
    vector = Vector.createVec(this.outerShell()[len - 1].pos, this.outerShell()[0].pos);
    this._normals.push(vector.normal());
  };

  AtomCollection.prototype.move = function (vector) {
    this.center = this.center.add(vector);
    this.atoms.forEach(function(atom){
      atom.pos = atom.pos.add(vector);
    })
  };
})();
