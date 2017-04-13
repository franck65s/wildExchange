
'use strict';

angular.module("questionComponent")


    .component("affichageQr", {
        templateUrl: "affichageQuestionReponses.html",

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
                //   result.sortby(questionsReponse.Questions.title);
                    // var tableauQR = result.map(function (items) {
                    //     var rObj = {};
                    //     rObj[items.Questions.id] = items.Answers.body;
                    //     return rObj;
                    // });

                    // reformattedArray is now [{1: 10}, {2: 20}, {3: 30}], 

                    // kvArray is still: 
                    // [{key: 1, value: 10}, 
                    //  {key: 2, value: 20}, 
                    //  {key: 3, value: 30}]
                })
                    .catch((err) => { });
            };

            // this.delete = () => {
            // this.questions.splice(-1, 1);

            // }
        }]
    });


