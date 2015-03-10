(function(){
  window.Physics = (window.Physics || {});

  Physics.Collision = function (obj1, obj2) {
    var collisionPos = findCollisionPos(obj1,obj2);

    obj1.vel;
    obj2.vel;
    obj1.momentum;
    obj2.momentum;
  };

 function findCollisionPos(obj1, obj2){
    for (var i = 0; i < obj1.outerShellPos.length; i++) {
      for (var j = 0; j < obj2.outerShellPos.length; j++) {
        if(obj1.outerShellPos[i].equal(obj2.outerShellPos[j])){
          return obj1.outerShellPos[i];
        }
      }
    }
  }

})();
