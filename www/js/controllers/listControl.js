angular.module('mycontact')

  .controller('listController', function ($scope, $state) {

    //$scope.myDataArray = [{
    //  name: 'worayot kanle',
    //  imgDev: 'boy.jpeg',
    //  nick: 'Boy',
    //  social: 'fb.com/BoyWorayot',
    //  mobile: '',
    //  line: ''
    //},{
    //  name: 'Panachai Niyomkodchakorn',
    //  imgDev: 'golf.png',
    //  nick: 'Golf',
    //  social: 'fb.com/panachaiNY',
    //  mobile: '090-5607225',
    //  line: 'panachai.ny'
    //}
    //    ]


    $scope.myDataArray = [
      {
        name: 'ศุภโชค พงษ์จิตปรีอาทร',
        imgDev: 'por.png',
        nick: 'ป้อ',
        social: '-',
        mobile: '-',
        line: '-'
      },
      {
        name: 'ปณชัย นิยมกชกร',
        imgDev: 'golf.png',
        nick: 'กอล์ฟ',
        social: 'fb.com/panachaiNY',
        mobile: '090-560-7225',
        line: 'panachai.ny'
      },
      {
        name: 'อภิษฐา สุนทรธงชัย',
        imgDev: 'cream.png',
        nick: 'ครีม',
        social: 'fb.com/Creammeii',
        mobile: '085-406-6161',
        line: 'creammeii'
      },
      {
        name: 'บุญฤทธิ์ รั้วสำราญ',
        imgDev: 'hok.png',
        nick: 'ฮกคุง',
        social: 'fb.com/hokkung.leo',
        mobile: '083-005-7442',
        line: 'kohok2178'
      },
      {
        name: 'วรยศ คำลือ',
        imgDev: 'boy.png',
        nick: 'บอย',
        social: 'fb.com/BoyWorayot',
        mobile: '084-434-1555',
        line: 'boyworayot'
      }
    ]


    $scope.btnDetail = function (data) {
      console.log('Pressed.');
      $state.go('detail', {
        img: data.imgDev,
        name: data.name,
        nick: data.nick,
        social: data.social,
        mobile: data.mobile,
        line: data.line
      });
    }

  })
