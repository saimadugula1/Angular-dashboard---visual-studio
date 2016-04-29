angular.module("wiproApp")
    .controller("dashboardController", function ($scope, dashboardService, $location, $state, $window, $rootScope) {
        "use strict";
        $scope.byDemandSourceList = [];
        $scope.byDemandClassificationList = [];
        $scope.byDemandStatusList = [];

        $scope.byOppurtunityStatusList = [];
        $scope.byOppurtunityClassificationList = [];
        $scope.byOppurtunityCategoryList = [];

        //totla for opportunity classification list

        $scope.getTotal1 = function (type) {
            var total = 0;
            angular.forEach($scope.byOppurtunityClassificationList, function (el) {
                total += el[type];
            });
            return total;
        };
        //total for byOppurtunityStatusList
        $scope.getTotal2 = function (type) {
            var total = 0;
            angular.forEach($scope.byOppurtunityStatusList, function (el) {
                total += el[type];
            });
            return total;
        };
        //total byOppurtunityCategoryList
        $scope.getTotal3 = function (type) {
            var total = 0;
            angular.forEach($scope.byOppurtunityCategoryList, function (el) {
                total += el[type];
            });
            return total;
        };

        // total byDemandClassificationList
        $scope.getTotal4 = function (type) {
            var total = 0;
            angular.forEach($scope.byDemandClassificationList, function (el) {
                total += el[type];
            });
            return total;
        };
        //total byDemandSourceList
        $scope.getTotal5 = function (type) {
            var total = 0;
            angular.forEach($scope.byDemandSourceList, function (el) {
                total += el[type];
            });
            return total;
        };
        //total byDemandStatusList
        $scope.getTotal6 = function (type) {
            var total = 0;
            angular.forEach($scope.byDemandStatusList, function (el) {
                total += el[type];
            });
            return total;
        };


        // Gets the getDemandSourceData
        $scope.getDemandSourceData = function () {
            dashboardService.getDemandSourceData().success(function (data) {
                $scope.byDemandSourceList = data.slice(0,3);
            }).error(function (err) {
                return;
            });
        };

        // Gets the getDemandClassificationData
        $scope.getDemandClassificationData = function () {
            dashboardService.getDemandClassificationData().success(function (data) {
                $scope.byDemandClassificationList = data.slice(0,2);
            }).error(function (err) {
                return;
            });
        };
        //limit
       // $scope.limit = 2;
        // Gets the getDemandStatusData
        $scope.getDemandStatusData = function () {
            dashboardService.getDemandStatusData().success(function (data) {
                
                $scope.byDemandStatusList=  data.filter(function (item) {
                    return item.Key == "Open" || item.Key == "Hold"||item.Key == "Identified";
                }); 

            }).error(function (err) {
                return;
            });
        };


        // Gets the getOppurtunityStatusData
        $scope.getOppurtunityStatusData = function () {
            dashboardService.getOppurtunityStatusData().success(function (data) {
                $scope.byOppurtunityStatusList = data.slice(0,2);
            }).error(function (err) {
                return;
            });
        };

        // Gets the getOppurtunityClassificationData
        $scope.getOppurtunityClassificationData = function () {
            dashboardService.getOppurtunityClassificationData().success(function (data) {
                $scope.byOppurtunityClassificationList = data.slice(0,2);
            }).error(function (err) {
                return;
            });
        };

        // Gets the getOppurtunityCategoryData
        $scope.getOppurtunityCategoryData = function () {
            dashboardService.getOppurtunityCategoryData().success(function (data) {
                $scope.byOppurtunityCategoryList = data;
            }).error(function (err) {
                return;
            });
        };

    });
