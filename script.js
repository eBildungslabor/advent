window.setInterval(function() {

  var current = new Date();
  var expiry = new Date('October 14, 2020')

  if (current.getTime() < expiry.getTime()) {
    $('.14').hide();

  } else if (current.getTime() > expiry.getTime()) {
    $('.14').show();
  }

}, 0);


window.setInterval(function() {

  var current = new Date();
  var expiry = new Date('October 15, 2020')

  if (current.getTime() < expiry.getTime()) {
    $('.15').hide();

  } else if (current.getTime() > expiry.getTime()) {
    $('.15').show();
  }

}, 0);