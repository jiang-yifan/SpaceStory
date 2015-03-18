(function(){
  window.Physics = (window.Physics || {});

  Physics.Collision = function (obj1, obj2) {
    var collisionPos = findCollisionPos(obj1,obj2);

    obj1.vel;
    obj2.vel;
    obj1.momentum;
    obj2.momentum;
  };

 Physics.findCollision = function(obj1, obj2){
   var len = obj1.normals().length;
   var count = 0
   for (var i = 0; i < len; i++) {
     var result1 = getMinMax(obj1, obj1.normals()[i])
     var result2 = getMinMax(obj2, obj1.normals()[i])
     if(result1[0] < result2[1] || result1[1] > result2[0]){
       console.log("no gap");
       break;
     }
     count++;
   }
   if(count == len){
     console.log("collision");
   }
 };

 function getMinMax(obj, projection){
   var len = obj.outerShell().length;
   for (var i = 0; i < len; i++) {
     var coord = obj.outerShell()[i].pos;
     var vector = new Vector([coord.y, coord.x])
     var dot = vector.dot(projection);
     if(!max || dot > max){
       var max = dot;
     }
     if(!min || dot< min){
       var min = dot;
     }
   }
   return [max,min];
 };

})();
