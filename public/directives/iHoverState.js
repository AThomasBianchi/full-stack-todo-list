(function() {
  function iHover() {
    return {
      link: function($scope, $element, $attrs) {

        $element.on("mouseover", function() {
          $element.css('cursor', 'pointer');
        });

        $element.on('mouseout', function() {
          $element.css('cursor', 'default');
        });
        
      }
    }
  }

  angular
    .module("app")
    .directive("iHover", iHover);

})();
