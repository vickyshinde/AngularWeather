// Services
weatherApp.service('cityService', function() {
    this.city = "Pune, IN";
})

weatherApp.service('weatherService', ['$resource', function($resource) {
    
    this.GetWeather = function(city, days, APPID){
        
    
    var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {callback: "JSON_CALLBACK"}, { get: { method: "JSONP"}});
    
    return weatherAPI.get({ q: city, cnt: days, APPID:'70fd0d8e4091568e4be8ed5a3aafb3dd'});
    
    };
}]);