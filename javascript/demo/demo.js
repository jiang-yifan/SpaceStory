(function () {
  Demo = function(){
    initializeForm();
  };

  function initializeForm() {
    debugger
    $("#radius").on("change", changeRadiusPreview);
    $("#atoms").on("change", changeAtomsPreview);
  };

  function changeRadiusPreview() {
    $("#radius_preview").text($("#radius").val());
  };

  function changeAtomsPreview() {
    $("#atoms_preview").text($("#atoms").val());
  }
})();
