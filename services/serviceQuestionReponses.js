'use strict';


const URL = "http://localhost:3000/Questions?_embed=Answers&_sort=Answers&_order=DESC";

angular.module('services')

  .service('RecipesQR', ['$http', function ($http) {


    this.afficher = (questionsReponses) => {
      return $http.get(URL)
    };

    this.afficherId = (id) => {
      return $http.get('http://localhost:3000/Questions/'+ id)
    };

    this.reponseId = (id) => {
      return $http.get('http://localhost:3000/Questions/'+ id +'?_embed=Answers')
    };


  }]);