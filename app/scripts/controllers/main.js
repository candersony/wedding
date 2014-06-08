'use strict';

angular.module('weddingApp')
  .controller('MainCtrl', function ($scope) {

  $scope.orderOfTheDay = {
    events: [{
      icon: 'rings',
      name: 'Ceremony',
      time: new Date('November 15, 2014 13:00:00'),
      location: 'The Adelina Patti Opera Theatre',
      description: 'The delightful couple will marry in the Grade 1 Listed Patti Opera Theatre at Craig-Y-Nos Castle. We hope to sing a few songs so warm up your voices to really belt them out'
    }, {
      icon: 'couple',
      name: 'Photographs',
      time: new Date('November 15, 2014 14:00:00'),
      location: 'Craig Y Nos Castle Courtyard',
      description: 'The couple would like to share a few photographs with their guests so the wonderful memories live on forever'
    }, {
      icon: 'drinks',
      name: 'Champagne',
      time: new Date('November 15, 2014 15:00:00'),
      location: 'The Nicollini Lounge',
      description: 'After photographs with family and friends the couple would love to share a glass of champagne with you all in the lounge to celebrate their nuptials'
    }, {
      icon: 'cake',
      name: 'Wedding Breakfast',
      time: new Date('November 15, 2014 16:00:00'),
      location: 'The Conservatory',
      description: 'A three course dinner will be served accompanied with embarrassing speeches and a toast to the happy couple'
    }, {
      icon: 'dancing',
      name: 'The First Dance',
      time: new Date('November 15, 2014 19:00:00'),
      location: 'The Music and Billiard Rooms',
      description: 'Join Melinda and Craig for a drink at the Paid Bar and some awkward but enthusiastic dancing till late'
    }]
  };
});
