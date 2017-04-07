
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
          body: this.body
        }
        RecipesService.validate(reponse);
      }



      this.getQuestion = () => {
        var result = [];
        RecipesService.afficher().then((items) => {
          this.result = items.data;
        })
          .catch((err) => { });
      };



      this.delete = () => {
        this.questions.splice(-1, 1);

      }
    }]
  });
