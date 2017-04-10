
'use strict';

angular.module("questionComponent")


  .component("affichageQuestion", {
    templateUrl: "affichageQuestion.html",

    bindings: {
      questions: '<'
    },

    controller: ['RecipesService', function (RecipesService) {

     
      this.$onInit = () => {
        this.getQuestion();
      };

      this.getQuestion = () => {
        var result = [];
        RecipesService.afficher().then((items) => {
          this.result = items.data;
        })
          .catch((err) => { });
      };

      // this.delete = () => {
        // this.questions.splice(-1, 1);

      // }
    }]
  });
