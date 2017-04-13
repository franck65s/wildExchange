
'use strict';

angular.module("questionComponent", [])


  .component("createQ", {
    templateUrl: "createQuestion.html",

    bindings: {
      questions: '<'
    },

    controller: ['RecipesService', function (RecipesService) {

      this.submit = () => {
        var reponse = {
          titre: this.title,
          body: this.body,
          newDate : new Date()

        }
        RecipesService.validate(reponse);
      }
      
    }]
  });
