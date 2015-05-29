app.controller('EpisodeController', ['$scope', 'episodes', function($scope, episodes) {
  episodes.success(function(data) {
  	$scope.episodes = data;
  });
  
  //tabs
  $scope.tab = 1;
  $scope.isSet = function(checkTab) {
    return $scope.tab === checkTab;
  };
  $scope.setTab = function(setTab) {
    $scope.tab = setTab;
  }
  
  //year
  $scope.date = new Date();
  
}]);