app.directive('scrollTop', function() {
  return {
    restrict: 'A',
    link: function(scope, $elm) {
      $elm.on('click', function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
      });
    }
  }
  
});

app.directive('seriesContent', function() {
  return {
    restrict:'E',
    /*scope: {
      info: '='
    },*/
    templateUrl: 'js/directives/series-content.html'
  };
});

app.directive('seriesTabs', function() {
  return {
    restrict:'E',
    templateUrl: 'js/directives/series-tabs.html',
    
    
  };
});