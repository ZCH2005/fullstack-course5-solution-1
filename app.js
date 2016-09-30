(function () {

  angular.module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {

    $scope.lunch = "";
    $scope.message = "";
    $scope.check = function () {
      if (isEmpty($scope.lunch)) {
        $scope.message = "Please enter data first";
        return;
      }
      var arry = $scope.lunch.split(",");
      var menus = [];
      angular.forEach(arry, function (value) {
        if (!isEmpty(value.trim()))
          menus.push(value);
      });

      if (menus.length < 4) {
        $scope.message = "Enjoy!";
      }
      else {
        $scope.message = "Too much!";
      }

    };

    function isEmpty(str) {
      return (!str || 0 === str.length);
    }

  };

})();