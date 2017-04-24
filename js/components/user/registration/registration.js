angular.module('components').component("index", {

    templateUrl: '/js/components/user/registration/registration.html',

    bindings: {

        user: '<',
        error: '@',
        cookieUser: '<',
        cookieToken: '<',
        msgVerifToken: '<'
    },

    controller: ['signService', '$cookies', '$location','$state', function (signService, $cookies, $location,$state) {
        var self = this;

        this.$onInit = () => {
            this.cookieUser = $cookies.get('id');
            this.cookieToken = $cookies.get('tokenSecure');
            console.log(this.cookieUser, this.cookieToken);
            VerificationConnection(this.cookieUser, this.cookieToken);
        }

        this.connection = (email, mdp) => {
            signService.userConnect(email, mdp).then((response) => {
                self.user = response.data;
                SendCookie(response.data["0"].id);
            }).catch((response) => {
                self.error = response.statusText || "une erreur s'est produite pendant l'identification";
            });
        }

        function SendCookie(id) {
            $cookies.put('id', '' + id + '');
            $state.go('home');
            generatToken(id)
            self.cookieUser = $cookies.get('id');
        };

        function DeleteCookie() {
            $cookies.remove('id');
            $cookies.remove('tokenSecure');
            $location.path("/index");
        };

        function generatToken(id) {
            self.tokenid = RandomTocken();
            var add = {
                tokenSecure: self.tokenid
            };

            signService.userTokenAdd(id, add).then((response) => {
                $cookies.put('tokenSecure', '' + self.tokenid + '');
                self.cookieToken = $cookies.get(self.tokenid);
            }).catch((response) => {
                self.error = response.statusText || "une erreur s'est produite pendant l'identification";
            });


        };

        function RandomTocken() {
            return (Math.random() * 6000);
        };

        function VerificationConnection(userid, token) {
            if (!userid) {
                $location.path("/index");
                DeleteCookie();
            }
            if (!token) {
                $location.path("/index");
                DeleteCookie();
            }
            console.log(token);
            signService.verifToken(userid, token).then((response) => {
                if (response.data['0'].tokenSecure != token && response.data['0'].id != userid) {
                    DeleteCookie();
                    $location.path("/index");
                }

            }).catch((response) => {
                $location.path("/index");
                DeleteCookie();
            });


        };
    }]
});