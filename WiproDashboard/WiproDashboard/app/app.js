angular.module("wiproApp", ["ngRoute", "ui.router", "ui.bootstrap", 'angular.filter']);
angular.module("wiproApp")
    .config(["$urlRouterProvider", "$httpProvider", "$stateProvider"
    , function ($urlRouterProvider, $httpProvider, $stateProvider) {
        "use strict";
        $stateProvider
        .state("dashboard", {
            url: "/dashboard",
            templateUrl: "app/components/Dashboard/dashboard.html",
            controller: "dashboardController"
        })

        $urlRouterProvider.otherwise("/dashboard");

    }]);

angular.module("wiproApp")
    .constant("ngAuthSettings", {
        // apiServiceBaseUri: "https://localhost:44300/api/v1" //enable for debugging locally
        apiServiceBaseUri: "https://wipro.azurewebsites.net/api"
    });