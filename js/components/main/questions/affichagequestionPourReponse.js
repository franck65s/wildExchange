'use strict';

angular.module("components")


    .component("affichageReponse", {
        templateUrl: "js/components/questions/afficheQuestionId.html",

        bindings: {
            reponses: '<',
        },

        controller: ['RecipesQR', '$rootScope', function (RecipesQR, $rootScope) {

            this.$onInit = () => {
                this.getQuestion($rootScope.idQuestion);
                this.getReponse($rootScope.idQuestion);
            };

            this.getQuestion = (id) => {
                RecipesQR.afficherId(id).then((items) => {
                    this.result = items.data;
                })
                    .catch((err) => { });
            };

            this.getReponse = (id) => {
                RecipesQR.reponseId(id).then((items) => {
                    this.reponse = items.data;
                })
                    .catch((err) => { });
            };
        }]
    });