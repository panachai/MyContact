angular.module('mycontact')

  .controller('detailController', function ($scope, $state, $stateParams,$ionicPopup) {
    console.log('DETAIL START.');



    $scope.imgDev = $stateParams.img;
    $scope.txtName = $stateParams.name;
    $scope.txtNickName = $stateParams.nick;
    $scope.social = $stateParams.social;
    $scope.mobile = $stateParams.mobile;
    $scope.line = $stateParams.line;

    //img:data.imgDev,name:data.name,nick:data.nick,social:data.social,mobile:data.mobile,line:data.line

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

