'use strict';

angular.module("components")


    .component("affichageReponse", {
        templateUrl: "js/components/questions/afficheQuestionId.html",

        bindings: {
            reponses: '<',

        },

        controller: ['RecipesQR', function (RecipesQR) {


            this.$onInit = () => {
                this.getQuestion();
                console.log(this.reponses)
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