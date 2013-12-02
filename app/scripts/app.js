'use strict';

angular.module('guidebookApp', [
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/chapters.html',
        controller: 'ChaptersController'
      })
      .when('/chapter/:chapterId', {
        templateUrl: 'views/chapters.html',
        controller: 'ChaptersController'
      })
      .when('/addNote/:chapterId', {
        templateUrl: 'views/addNote.html',
        controller: 'AddNoteController'
      })
      .when('/deleteNote/:chapterId/:noteId', {
        templateUrl: 'views/addNote.html',
        controller: 'DeleteNoteController'
      });
  });
