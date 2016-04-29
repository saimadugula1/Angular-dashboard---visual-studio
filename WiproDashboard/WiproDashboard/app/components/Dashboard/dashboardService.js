angular.module("wiproApp")
    .factory("dashboardService", ["$http", "ngAuthSettings", function ($http, ngAuthSettings) {
        "use strict";
        var urlBase = ngAuthSettings.apiServiceBaseUri;
        var dashboardService = {};

        dashboardService.getDemandSourceData = function () {
            return $http({
                method: "GET",
                url: urlBase + "/pulse/dashboard/demandsource",
                headers: { "content-Type": "application/json" },
                cache: false,
                success: function (data) {
                    return data;
                }
            });
        };

        dashboardService.getDemandClassificationData = function () {
            return $http({
                method: "GET",
                url: urlBase + "/pulse/dashboard/demandclassification",
                headers: { "content-Type": "application/json" },
                cache: false,
                success: function (data) {
                    return data;
                }
            });
        };

        dashboardService.getDemandStatusData = function () {
            return $http({
                method: "GET",
                url: urlBase + "/pulse/dashboard/demandstatus",
                headers: { "content-Type": "application/json" },
                cache: false,
                success: function (data) {
                    return data;
                }
            });
        };


        dashboardService.getOppurtunityClassificationData = function () {
            return $http({
                method: "GET",
                url: urlBase + "/pulse/dashboard/opportunityclassification",
                headers: { "content-Type": "application/json" },
                cache: false,
                success: function (data) {
                    return data;
                }
            });
        };

        dashboardService.getOppurtunityStatusData = function () {
            return $http({
                method: "GET",
                url: urlBase + "/pulse/dashboard/opportunitystatus",
                headers: { "content-Type": "application/json" },
                cache: false,
                success: function (data) {
                    return data;
                }
            });
        };

        dashboardService.getOppurtunityCategoryData = function () {
            return $http({
                method: "GET",
                url: urlBase + "/pulse/dashboard/opportunitycategory",
                headers: { "content-Type": "application/json" },
                cache: false,
                success: function (data) {
                    return data;
                }
            });
        };

        return dashboardService;
    }]);