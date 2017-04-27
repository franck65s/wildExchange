'use strict';


const U = "http://localhost:3000/users";

angular.module('services')

  .service('annuaireService', ['$http', function ($http) {
    

    this.afficher = (annuaires) => {
      return $http.get(U);

    };


  }]);