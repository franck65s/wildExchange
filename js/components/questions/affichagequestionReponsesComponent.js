'use strict';

angular.module("components")


    .component("affichageQr", {
        templateUrl: "js/components/questions/affichageQuestionReponses.html",

        bindings: {
            questionsReponses: '<',

        },

        controller: ['RecipesQR', function (RecipesQR) {


            this.$onInit = () => {
                this.getQuestion();
            };

            this.getQuestion = () => {
                var result = [];
                RecipesQR.afficher().then((items) => {
                        this.result = items.data;
                     
                    })
                    .catch((err) => {});
            };
        }]
    });