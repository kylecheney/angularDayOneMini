angular.module('friendApp').controller('mainCtrl', function($scope){

  $scope.friends = ["Lacey", "Steven", "Bri"];

  $scope.addFriend = function () {
    $scope.friends.push($scope.newFriend);
    $scope.newFriend = "";
  };

});
