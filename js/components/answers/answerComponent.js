'use strict';

angular.module("components")


  .component("createAnswer", {
    templateUrl: "js/components/answers/createAnswer.html",

    controller: ['answerService','$rootScope','$scope', function (answerService,$rootScope,$scope) {

     
      this.$onInit = () => {
       
      };

      this.submit = () => {
        var reponse = {
          body: this.body,
          newDate: new Date(),
          QuestionId: parseInt($rootScope.idQuestion)
        }
        answerService.validate(reponse);
      };

    }]
  });