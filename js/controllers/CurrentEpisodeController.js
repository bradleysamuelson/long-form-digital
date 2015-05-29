app.controller('CurrentepisodeController', ['$scope', 'episodes', '$routeParams', function($scope, episodes, $routeParams) {
  episodes.success(function(data) {
  	$scope.episode = data[$routeParams.id];
  	
  	
  	//used to set the active episode card  	
  	$scope.currentEpisode = data[$routeParams.id];
  
  	
  	//viewer stuff
  	
  	$scope.epComplete = false;
  	
  	// initial image index
  	$scope._Index = 0;
  	
  	// if a current image is the same as requested image
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };
    // show prev image
    $scope.showPrev = function () {
        //set the prev to only work if you're not on the first image
        if ($scope._Index > 0) {
          $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.episode.images.length - 1;
          $scope.epComplete = false;
        } else {
          $scope._Index = 0;
        }
        
        //console.log('Previous');
    };

    // show next image
    $scope.showNext = function () {
      if ($scope._Index == ($scope.episode.images.length - 1)) {
        $scope._Index = ($scope.episode.images.length);
        $scope.epComplete = true;
      } else {
        $scope._Index = ($scope._Index < $scope.episode.images.length ) ? ++$scope._Index : $scope.episode.images.length ;
      }
      
        //console.log('Next');
    };
    
    //disabled for next and prev buttons
    $scope.isPrevDisabled = function() {
      return $scope._Index === 0;
    };
    $scope.isNextDisabled = function() {
      return $scope._Index === ($scope.episode.images.length);
    };

    // show a certain image
    $scope.showScreen = function (index) {
        $scope._Index = index;
        $scope.epComplete = false;
    };
    
    // show final episode message
    $scope.finalEp = false;
    $scope.isFinalEp = function() {
      $scope.finalEp = $scope.episode.finalEpisode;
      return $scope.finalEp;
    };
    
    // show latest episode message
    $scope.latestEp = false;
    
    $scope.isLatest = function() {
      if ($scope.episode.id === ($scope.episodes.length - 1)) {
        $scope.latestEp = true;
      }
      return $scope.latestEp;
    };
    
    // TODO: arrow key controls
    
    
    // tabs
    $scope.tab = 1;
    $scope.isSet = function(checkTab) {
      return $scope.tab === checkTab;
    };
    $scope.setTab = function(setTab) {
      $scope.tab = setTab;
    }
    
  	
  });
  
}]);