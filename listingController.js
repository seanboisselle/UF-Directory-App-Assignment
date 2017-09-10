angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.code = "";
    $scope.name = "";
    $scope.address = "";
    $scope.latitude = "";
    $scope.longitude = "";

    $scope.addListing = function() {
      var addListing = {
        "code" : $scope.code,
        "name" : $scope.name,
        "address" : $scope.address,
          "coordinates" : {
              "latitude" : $scope.latitude,
              "longitude" : $scope.longitude
          }
      };
        $scope.listings.push(addListing);
        $scope.code = "";
        $scope.name = "";
        $scope.address = "";
        $scope.latitude = "";
        $scope.longitude = "";
    };

    $scope.deleteListing = function(index) {
          index = $scope.listings.indexOf(index)
          $scope.listings.splice(index, 1);
    };

    $scope.showDetails = function(index) {
      $scope.info = {
        "latitude" : "",
        "longitude" : "",
        "address" : ""
      };

      $scope.info = {
        "latitude" : "Latitude: " + index.coordinates.latitude,
        "longitude" : "Longitude:  " + index.coordinates.longitude,
        "address" : "Address:  " + index.address
      };
    };
  }
]);
