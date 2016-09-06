var tweeterControllers = angular.module('tweeterApp.controllers', []);

tweeterControllers.controller('TweetCtrl', function TweetCtrl($scope) {
  $scope.tweets = [
    {text:"Tweet 1"},
    {text:"Tweet 2"},
    {text:"Tweet 3"},
  ];   

  $scope.submitTweet = function(text) {
    alert("You Tweeted - "+text);
  }
});


