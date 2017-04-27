'use strict';

angular.module("components")


  .component("searchQ", {
    templateUrl: "js/components/questions/searchQ.html",

    controller: ['researchQService', function (researchQService) {
      this.$onInit = () => {
       
      };

      this.submit = () => {
        var reponse = {
          titre: this.title        
        }
        researchQService.searchQ(reponse);
      };

    }]
  });