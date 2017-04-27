'use strict';

angular.module("components")
    .component("main", {
        templateUrl: "js/components/main/main.html",

        bindings: {
            reponses: '<',
        },

        controller: ['$cookies', '$window', function ($cookies, $window) {


            this.$onInit = () => {
                this.myId = $cookies.get('id');
            };

            this.deconnexion = () => {
                $cookies.remove('id');
                $cookies.remove('tokenSecure');
                $window.location.href = '/#!/index';
                this.myId = null;
            }

        }]
    });
