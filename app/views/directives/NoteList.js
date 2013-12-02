'use strict';

angular.module('guidebookApp')
.directive('gbNoteList', function() {
  return {
    restrict: 'A',
    templateUrl: 'views/directives/noteList.html',
    scope: {
      show: '=show',
      notes: '=notes',
      orderValue: '@orderBy',
      onDelete: '=deleteNoteHandler'
    }
  };
});
