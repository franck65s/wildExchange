'use strict';

angular.module("components")


  .component("createQ", {
    templateUrl: "js/components/questions/createQuestion.html",

    controller: ['RecipesService', function (RecipesService) {
      this.$onInit = () => {
       
      };

      this.submit = () => {
        var reponse = {
          titre: this.title,
          body: this.body,
          newDate: new Date()

        }
        RecipesService.validate(reponse);
      };

    }]
  });