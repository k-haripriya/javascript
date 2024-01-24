// your-external-script.js

document.addEventListener('DOMContentLoaded', function() {
  var declineButton = document.querySelector('.ID-declineToS.ACTION-declineToS.TARGET-.CL_BUTTON');
  if (declineButton) {
    declineButton.addEventListener('click', function() {
      console.log('I Do Not Accept button clicked!');
      // You can perform additional actions here if needed
    });
  }
});

