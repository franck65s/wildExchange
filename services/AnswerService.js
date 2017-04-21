'use strict';


const API = "http://localhost:3000/Answers";

angular.module('services')

  .service('answerService', ['$http', function ($http) {

    this.validate = (answer) => {

      $http.post(API, answer)
        .then((response) => {
          var data = response.data;

        });

    }

    this.afficher = (answer) => {
      return $http.get(API);

    };


  }]);