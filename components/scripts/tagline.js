var $, fill;

$ = require('jquery');

(fill = function(item) {
  $('.tagline').append("" + item);
  return fill;
})('Creative minds in Art');
