angular.module('components').component("inscription", {

    templateUrl: './js/components/user/sign/sign.html',

    bindings: {

        user: '<',
        error: '@'

    },

    controller: ['reg','$window', function (reg,$window) {


        this.postReg = () => {
            this.add = {
                username: this.userpost.name,
                mail: this.userpost.mail,
                mdp: this.userpost.mdp
            }
            reg.userPost(this.add).then((response) => {

               $window.location.href = '/#!/index';


            }).catch((response) => {

                this.error = response.statusText || "une erreur s'est produite";
            });
        }
    }]
});