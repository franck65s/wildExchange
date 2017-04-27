'use strict';

angular.module('app')
    .config(function ($stateProvider, signServiceProvider, $windowProvider) {
        var $window = $windowProvider.$get();
        var $cookies;
        angular.injector(['ngCookies']).invoke(['$cookies', function (_$cookies_) {
            $cookies = _$cookies_;
        }]);

        function VerificationConnection(userid, token) {
            if (!userid) {
                DeleteCookie();
            }
            if (!token) {
                DeleteCookie();
            }
            signServiceProvider.$get().verifToken(userid, token).then((response) => {
                if (response.data['0'].tokenSecure != token && response.data['0'].id != userid) {
                    DeleteCookie();

                }

            }).catch((response) => {
                DeleteCookie();
            });
        }

        function DeleteCookie() {
            $cookies.remove('id');
            $cookies.remove('tokenSecure');
            $window.location.href = '/#!/index';
        };

        $stateProvider
            .state({
                name: "formulaireQuestion",
                url: "/createQ",
                component: "createQ",
                resolve: {
                    login: function ($cookies) {
                        VerificationConnection($cookies.get('id'), $cookies.get('tokenSecure'));
                    }
                }

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
                name: "index",
                url: "/index",
                component: "index"
            })
            .state({
                name: "inscription",
                url: "/inscription",
                component: "inscription"
            })
             .state({
                name: "researchQ",
                url: "/researchQ",
                component: "searchQ"
            })
              .state({
                name: "annuaire",
                url: "/annuaire",
                component: "annuaire"
            })
            .state({
                name: 'afficheQuestion',
                url: '/affiche/:id',
                component: 'affichageReponse',
                resolve: {
                    reponses: function ($stateParams, $rootScope) {
                        $rootScope.idQuestion = $stateParams.id;


                    }
                }
            })
            
            .state({
                name: 'affichageprofil',
                url: '/affichageprofil/:id',
                component: 'affichageUser',
                resolve: {
                    user: function (displayUser, $stateParams) {
                        return displayUser.afficherUser($stateParams.id);

                    }
                }
            })
            .state({
                name: 'profilUser',
                url: '/user/:id',
                component: 'profilUser',
                resolve: {
                    idUser: function ($stateParams, $rootScope) {
                        $rootScope.idUser = $stateParams.id;
                    },
                    login: function ($cookies) {
                        VerificationConnection($cookies.get('id'), $cookies.get('tokenSecure'));
                    }
                }
            });       
              
                
            

                    }
                }
            })

            
    })