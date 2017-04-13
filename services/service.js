'use strict';


const API_URL = "http://localhost:3000/Questions";

angular.module('recipes.services', [])

  .service('RecipesService', ['$http', function ($http) {

    this.validate = (questions) => {

      $http.post(API_URL, questions)
        .then((response) => {
          var data = response.data;

        });

    }

    this.afficher = (questions) => {
      return $http.get(API_URL);

    };


  }]);