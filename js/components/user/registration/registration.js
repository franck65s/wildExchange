angular.module('components').component("registration", {

    templateUrl: './js/components/user/registration/registration.html',

    bindings: {

        user: '<',
        error: '@'

    },

    controller: ['reg', function (reg) {


        this.postReg = () => {
            this.add = {
                name: this.userpost.name,
                mail: this.userpost.mail,
                mdp: this.userpost.mdp
            }
            reg.userPost(this.add).then((response) => {

                this.user = response.data;

            }).catch((response) => {

                this.error = response.statusText || "une erreur s'est produite";
            });
        }
    }]
});