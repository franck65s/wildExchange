angular.module("app")

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state({
                name: "formulaireQuestion",
                url: "/createQ",
                component: "createQ"
            })
            .state({
                name: "home",
                url: "/home",
                component: "affichageQr",

                resolve: {
                    // A function value resolves to the return
                    // value of the function
                    // questionsReponses: function (services) {
                    //     return services.RecipesQR();
                    // }
                }
            })
            .state({
                name: "register",
                url: "/register",
                component: "registration"
            })
            .state({
                name: 'afficheQuestion',
                url: '/affiche/:id',
                component: 'affichageReponse',
                resolve: {
                    reponses: function (RecipesQR, $stateParams) {
                        return RecipesQR.afficher($stateParams.id);
                    }
                }
            });

    })
//  $urlRouterProvider.otherwise('/home)