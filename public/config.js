(function() {
  angular
    .module("app")
    .config(function($routeProvider) {
      $routeProvider
        .when("/welcome", {
          template: "<task-welcome></task-welcome>"
        })
        .when("/form", {
          template: "<task-form></task-form>"
        })
        .otherwise({ redirectTo: "/welcome" });
    });
    
}());
