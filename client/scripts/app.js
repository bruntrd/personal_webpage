var myApp = angular.module('myApp', ['ngRoute', 'appControllers']);

var appControllers= angular.module('appControllers', []);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/home', {
           templateUrl: "/assets/views/routes/home.html",
            controller: "HomeController"
        }).
        when('/curling', {
            templateUrl: "/assets/views/routes/curling.html",
            controller: "CurlingController"
        }).
        when('/contact', {
            templateUrl: "/assets/views/routes/contact.html",
            controller: "ContactController"
        }).
        when('/career', {
            templateUrl: "/assets/views/routes/career.html",
            controller: "CareerController"
        }).
        when('/projects', {
            templateUrl: "/assets/views/routes/projects.html",
            controller: "ProjectsController"
        }).
        when('/education', {
            templateUrl: "/assets/views/routes/education.html",
            controller: "EducationController"

        }).
        otherwise({
            redirectTo: "/home"
        });

}]);


