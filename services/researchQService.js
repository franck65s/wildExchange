'use strict';


const A = "http://localhost:3000/users?q=";

angular.module('services')

  .service('researchQService', ['$http', function ($http) {

    

    this.searchQ = (reponse) => {
      return $http.get("http://localhost:3000/users?q="+reponse );

    };


  }]);