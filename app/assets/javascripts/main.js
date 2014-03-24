var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: "/assets/templates/home.html",
    controller: "homeController"
  })
  .otherwise({ redirectTo: "/" });
});

app.controller("homeController", function() {
  
});