'use strict';


const URL = "http://localhost:3000/Questions?_embed=Answers&_sort=Answers&_order=DESC";

angular.module('recipes.services')

  .service('RecipesQR',['$http',function ($http) {


 this.afficher = (questionsReponses) =>{
 return  $http.get(URL)
          
     };

 
  }]);

