angular.module('mycontact')

  .controller('listController', function ($scope, $state) {

    $scope.myDataArray = [{
      name: 'กนกชัย ยังกิญจิ',
      imgDev: '5932040001.jpg',
      nick: 'เนย',
      social: 'fb.com/Kanokchai Yangkinchi',
      mobile: '090-916-5216',
      line: '0829982085'
    }, {
      name: 'กมลแก้ว นาคเกษม', imgDev: '5932040003.jpg', nick: 'หม่อน', social: '', mobile: '', line: ''
    }, {
      name: 'กาญจนา ทิพย์บ ารุง',
      imgDev: '5932040004.jpg',
      nick: 'เพ็น',
      social: 'fb.com/Kanjana Tipbumrung',
      mobile: '096-021-1548',
      line: 'pen-pencil'
    }
    ]

    $scope.btnDetail = function (data) {
      console.log('Pressed.');
      $state.go('detail',{name:data.name,nick:data.nick});
    }


  })
