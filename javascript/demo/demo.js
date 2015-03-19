(function () {
  Demo = function(){
    this.initializeCanvas();
    this.initializeForm();
    this.asteroids = [];
    $("canvas").on("mousedown", this.findAsteroid.bind(this));
  };

  Demo.prototype.findAsteroid = function (event) {
    var mousePos = new Coordinate([event.clientY, event.clientX]);
    for (var i = 0; i < this.asteroids.length; i++) {
      if(this.nearAsteroid(this.asteroids[i],mousePos)){
        console.log("attached");
        $("canvas").on("mouseup", this.finishMoveAsteroid.bind(this));
        $("canvas").on("mousemove", this.moveAsteroid.bind(this));
        break;
      }
    }
  };

  Demo.prototype.nearAsteroid = function(asteroid, mousePos){
    if(Util.distance(asteroid.center, mousePos) < asteroid.radius){
      this.currentAsteroid = asteroid;
      this.currentPosition = mousePos;
      return true;
    };
  };

  Demo.prototype.moveAsteroid = function (event) {
    var mousePos = new Coordinate([event.clientY, event.clientX]);
    this.currentAsteroid.move(mousePos.subtract(this.currentPosition));
    this.draw();
    this.currentPosition = mousePos;
  };

  Demo.prototype.finishMoveAsteroid = function () {
    console.log("removed");
    $("canvas").off('mouseup mousemove');
  };

  Demo.prototype.initializeCanvas = function () {
    canvasEl = document.getElementsByTagName("canvas")[0];
    canvasEl.height = window.innerHeight;
    canvasEl.width = window.innerWidth;
    this.ctx = canvasEl.getContext("2d");
  };

  Demo.prototype.initializeForm = function() {
    $("#radius").on("input change", changeRadiusPreview);
    $("#atoms").on("input change", changeAtomsPreview);
    $(".create").on("click", this.createAsteroid.bind(this));
  };

  Demo.prototype.createAsteroid = function(event) {
    event.preventDefault();
    var radius = $("#radius").val();
    var atoms = $("#atoms").val();
    var asteroid = new Asteroids.Asteroid(
      {
        radius: radius,
        atoms: atoms
        },
        [200,500]
        )
    this.asteroids.push(asteroid);
    this.draw();
  };

  Demo.prototype.draw = function () {
    this.ctx.clearRect(0,0,1000,1000);
    this.asteroids.forEach(function(asteroid){
      asteroid.drawAtoms(this.ctx);
      asteroid.draw(this.ctx);
    }.bind(this));
  };

  function changeRadiusPreview() {
    $("#radius_preview").text($("#radius").val());
  };

  function changeAtomsPreview() {
    $("#atoms_preview").text($("#atoms").val());
  };

})();
