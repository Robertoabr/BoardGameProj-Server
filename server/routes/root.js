'use strict';

module.exports = [
  {
    method: 'GET',
    path: '/app/',
    handler: function (request, h) {
      return h.file('index.html');
    },
  },
  {
    method: '*',
    path: '/{any*}',
    handler: function (request, h) {
      return '404 Error! Page Not Found!';
    },
  },
];
