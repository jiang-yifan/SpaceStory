(function(){
  window.Physics = (window.Physics || {});

  Physics.momentum = function(density, area, speed){
    return Math.floor(density * area * speed);
  };

  Physics.centerOfMass = function(atomsPos){
    var sumX = 0;
    var sumY = 0;
    atomsPos.forEach(function (atomPos) {
      sumX += atomPos[1];
      sumY += atomPos[0];
    });

    var meanX = sumX/atomsPos.length;
    var meanY = sumY/atomsPos.length;

    return [meanY, meanX];
  };

  Physics.kineticEnergy = function (momentum, speed) {
    return (momentum * speed);
  }

})();
