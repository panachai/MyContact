angular.module('mycontact')

  .controller('detailController', function ($scope, $state, $stateParams,$ionicPopup) {
    console.log('DETAIL START.');

    $scope.txtName = $stateParams.name;
    $scope.txtNickName = $stateParams.nick;

    $scope.btnBack = function () {
      console.log('back pressed.');
      $state.go('list');
    }

    $scope.btnCall = function () {
      console.log('btn Calling.......');
      var confirmPopup = $ionicPopup.confirm({title: 'Call', template: $stateParams.name});
      confirmPopup.then(function (res) {
        if (res) {
          console.log('OK');
        } else {
          console.log('Cancel');
        }
      });
    }


  })

