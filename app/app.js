'use strict';


angular.module('components', []); 
angular.module('services', []); 

angular.module('app', [
    "ui.router",
    "components",
    "services",
    "ngCookies"
]);

