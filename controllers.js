//Controllers
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function ($scope, $location, cityService) {
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function(){
        cityService.city = $scope.city;
    });
    
    $scope.submit = function(){
        $location.path("/forecast")
    }
    
}]);

weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', function ($scope, $routeParams, cityService, weatherService) {
    
    $scope.city = cityService.city;
    
    $scope.days = $routeParams.days || '2';
        
    $scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, cnt: $scope.days, APPID: $scope.APPID});
    
    //console.log($scope.weatherResult)
    
    $scope.convertToFahrenheit = function(degK) {
        return Math.round((1.8 * (degK - 273)) + 32);
    };
    
    $scope.convertToDate = function(dt) {
        return new Date(dt * 1000);
    };
    
}]);