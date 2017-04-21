'use strict';

angular.module("components")


  .component("createAnswer", {
    templateUrl: "js/components/answers/createAnswer.html",

    controller: ['answerService', function (answerService) {
      this.$onInit = () => {
       
      };

      this.submit = () => {
        var reponse = {
          body: this.body,
          newDate: new Date()

        }
        answerService.validate(reponse);
      };

    }]
  });