app.controller('ViewerController', ['$scope', function($scope) {
  $scope.current = 0;
  $scope.setCurrent = function(newViewer) {
    $scope.current = newViewer || 0;
  };
  
});