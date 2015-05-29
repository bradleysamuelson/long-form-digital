(function(){
    var app = angular.module('comic-directives', []);

    app.directive("comicAbout", function() {
      return {
        restrict: 'E',
        templateUrl: "templates/comic-about.html"
      };
    });

	app.directive("comicView", function() {
      return {
        restrict: "E",
        templateUrl: "comic-view.html",
        controller: function() {
          this.current = 0;
          this.setCurrent = function(imageNumber){
            this.current = imageNumber || 0;
          };
        },
        controllerAs: "episode"
      };
    });

    /*app.directive("comicView", function() {
      return {
        restrict: "E",
        templateUrl: "comic-view.html",
        controller: function() {
          this.tab = 1;

          this.isSet = function(checkTab) {
            return this.tab === checkTab;
          };

          this.setTab = function(activeTab) {
            this.tab = activeTab;
          };
        },
        controllerAs: "tab"
      };
    });*/

    
  })();
