(function() {
  function listHover() {
    return {
      link: function($scope, $element, $attrs) {

        $element.on("mouseover", function() {
          $element.css('background-color', '#eee');
          $element.children().css('color', '#ff0000');
          $element.css("border-radius", "5px");
        });

        $element.on('mouseout', function() {
          $element.css('background-color', 'white');
          $element.children().css('color', 'black');
        });

      }
    }
  }

  angular
    .module("app")
    .directive("listHover", listHover);

})();
