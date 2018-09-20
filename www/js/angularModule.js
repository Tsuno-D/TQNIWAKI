// Angularのモジュールとコントローラー作成
    // myAppモジュールを新規に作成
    angular.module('myApp', []);
    // myAppモジュールにHelloControllerコントローラーを登録
    angular.module('myApp')
      .controller('HelloController', function($scope) {
        $scope.msg = 'Hello, AngularJS!';
      });
