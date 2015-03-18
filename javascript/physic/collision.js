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
   var normals = getNormals(obj1);
   normals.concat(getNormals(obj2));
 };

 function getNormal(obj) {
   var len = obj.outerShell.length;
   var normals = [] ;
   for (var i = 0; i < len - 1; i++) {
     var vector = Vector.createVec(obj.outerShell[i], obj.outerShell[i+1]);
     normals.push(vector.normal());
   }
   vector = Vector.createVec(obj.outerShell[len - 1], obj.outerShell[0]);
   normals.push(vector.normal());
   return normals
 }

})();
