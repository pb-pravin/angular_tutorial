var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: "/assets/templates/home.html",
    controller: "HomeController"
  })
  .when('/settings', {
    templateUrl: "/assets/templates/settings.html",
    controller: "SettingsController"
  })
  .otherwise({ redirectTo: "/" });
});

app.controller("HomeController", function($scope) {

});

app.controller("SettingsController", function($scope) {
  $scope.name = "Johnny";
});
