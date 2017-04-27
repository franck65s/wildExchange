'use strict';




angular.module('services')

    .service('displayUser', function ($http) {



        this.afficherUser = (id) => {
            return $http.get('http://localhost:3000/users/'+id);

        }
    });