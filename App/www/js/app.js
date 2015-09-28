// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
//Created new state called dash
  .state('dash', {
      url: '/dash',
      abstract: true,
      templateUrl: 'templates/dash.html',
      controller: 'AppCtrl'
    })
  .state('dash.landing', {
        url: '/landing',
        views: {
          'home': {
            templateUrl: 'templates/landing.html'
          }
        }
      })

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })


 .state('app.patientdetails',{
        url:'/patientdetails',
        views: {
          'menuContent':{
            templateUrl: 'templates/patientDetails.html',
            controller: 'PatientDetails'
          }
        }
      })




  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

	 .state('app.landing', {
      url: '/landing',
      views: {
        'menuContent': {
          templateUrl: 'templates/landing.html',
          controller: 'AppCtrl'
        }
      }
    })
    .state('app.something',{
      url:'/somethinghere',
       views: {
        'menuContent': {
          templateUrl: 'templates/patientDetails.html',
          controller: 'PatientDetails'
        }
       }
    })





	.state('app.search', {
      url: '/search',
      views: {
        'menuContent': {
          templateUrl: 'templates/search.html',
          controller: 'SearchCtrl'
        }
      }
    })
	
	.state('app.kpi', {
      url: '/kpi',
      views: {
        'menuContent': {
          templateUrl: 'templates/kpi.html',
          controller: 'KpiCtrl'
        }
      }
    })
	

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
// $urlRouterProvider.otherwise('/app/playlists');
  $urlRouterProvider.otherwise('/dash/landing');
});
