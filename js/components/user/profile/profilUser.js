angular.module('components').component("profilUser", {

    templateUrl: './js/components/user/profile/profilUser.html',

    bindings: {

        error: '@'

    },

    controller: ['getProfil', '$rootScope', function (getProfil, $rootScope) {
        this.$onInit = () => {
            this.edit = false;
            getProfil.getInfo($rootScope.idUser).then((response) => {
                this.users = response.data;
            }).catch((response) => {

                this.error = response.statusText || "une erreur s'est produite";
            });
        };

        this.editOnclick = () => {
            this.edit = true;
        }

        this.save = () => {
            var add = {
                nom: this.settings.nom,
                prenom: this.settings.prenom,
                username: this.settings.username,
                MattermostName: this.settings.MattermostName,
                Age: this.settings.Age,
                wcsWhere: this.settings.wcsWhere,
                schoolPromo: this.settings.schoolPromo,
                GitHubLink: this.settings.GitHubLink,
                LinkedinLink: this.settings.LinkedinLink
            }
          getProfil.sendInfo($rootScope.idUser, add).then((response) => {
                console.log("ok");
            }).catch((response) => {

                this.error = response.statusText || "une erreur s'est produite";
            });
        }


    }]

});