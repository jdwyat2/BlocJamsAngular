(function() {
     function CollectionCtrl(Fixtures) {
          this.albums = Fixtures.GetCollection(12);
     }
 
     angular
         .module('blocJams')
         .controller('CollectionCtrl', CollectionCtrl);
 })();