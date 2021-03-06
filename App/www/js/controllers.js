angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $state , $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    // Http request should come somewhere her
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
    //Changing state to app
    $state.go('app.search');
  };
})

.controller('KpiCtrl', function($scope,$http, $state , $ionicPopup, $timeout,$window) {
  console.log("came here");
  $http.get("http://52.88.11.187/kpi.php?type=1")
  .success(function (response) {$scope.kpilists = response.records;});
  /*
  $http.get("http://52.88.11.187/kpi.php?type=1")
		.success(function (response) {});//$scope.kpilists = response.records;console.log($scope.kpilists);});
*/
  $scope.add=function(){
	  console.log("came to add");
	  $ionicPopup.prompt({
       title: 'Enter title',
	   template: 'Please enter your text here',
	   inputType: 'text',
	   inputPlaceholder: 'Your text here'
		}).then(function(res) {
			console.log(res);
			$http.get("http://52.88.11.187/kpi.php?type=2&kpiname="+res)
			.success(function (response) {});
				$window.location.reload(true);
		});
  };
  $scope.remove=function(id){
	  console.log("came to delete");
	  console.log("name:"+id.Name+"id="+id);
	  $http.get("http://52.88.11.187/kpi.php?type=3&kpiname="+id.Name)
		.success(function (response) {});
		$window.location.reload(true);
	};
/*
  $scope.kpilists = [
    { title: 'Screenings', id: 1 },
    { title: 'Visits', id: 2 },
    { title: 'Registrations', id: 3 },
    { title: 'Top Rated', id: 4 },
    { title: 'KPI#1', id: 5 },
    { title: 'KPI#2', id: 6 }
  ];

 */
})



.controller("SearchCtrl", function($scope,$http) {
$http.get("http://52.88.11.187/findpatients.php")
  .success(function (response) {$scope.patients = response.records;});

$scope.addRow = function(){
console.log("redirection code to be written");
//write code to insert DB
};
$scope.removeRow = function(name){
		console.log("here");
		var index = -1;
		var comArr = eval( $scope.companies );
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].name === name ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.companies.splice( index, 1 );
	};
})





.controller('PatientDetails',function($scope, $stateParams){
  $scope.preferences = {gender: [ {selected: true, name : "Male", value: 1}, {selected: true, name : "Female", value: 2} ]};
  $scope.prefGender = $scope.preferences.gender[0];

});
