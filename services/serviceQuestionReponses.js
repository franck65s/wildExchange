'use strict';


const URL = "http://localhost:3000/Questions?_embed=Answers";

angular.module('recipes.services')

  .service('RecipesQR',['$http',function ($http) {


 this.afficher = (questionsReponses) =>{
 return  $http.get(URL)
          
     };

 
  }]);

