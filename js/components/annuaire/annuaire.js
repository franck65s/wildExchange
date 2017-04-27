'use strict';

angular.module("components")


  .component("annuaire", {
    templateUrl: "js/components/annuaire/annuaire.html",

    bindings: {
      annuaires: '<'
    },

    controller: ['annuaireService', function (annuaireService) {


      this.$onInit = () => {
        this.getAnnuaire();
      };

      this.getAnnuaire = () => {
        var annu = [];
        annuaireService.afficher().then((items) => {
            this.annu = items.data;
          })
          .catch((err) => {});
      };

      
    }]
  });