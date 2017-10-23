angular.module('mycontact')
  .controller('loginController',function($scope,$http,$state){
    console.log('loginController start...');
    $scope.form = {};








    $scope.btnLogin = function(){
      console.log($scope.form.txt_user);
      console.log($scope.form.txt_pwd);


      $http({
        url:'http://busynor.com/www_web_api/webservice/ws_login.php',
        method:'POST',
        data:{
          var_username:$scope.form.txt_user,
          var_password:$scope.form.txt_pwd
        }
      }).then(function(response){
        console.log(response.data.results);
        if(response.data.results == 'success_login'){
          $state.go('list');
        }else{
          console.log('login error user or password');
        }
      },function(error){
        console.log(error);
      })

      
    }
  })
