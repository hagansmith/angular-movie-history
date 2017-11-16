"use strict";

app.controller("RatedCtrl", function($rootScope, $scope, MovieService){
  $scope.movies = [];
  MovieService.getRatedMovies($rootScope.uid).then((results) => {
    $scope.movies = results;
  }).catch((err)=>{
    console.log("error in getRatedMovies", err);
  });
});
