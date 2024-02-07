document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here
    const listIcon = document.getElementById('list-icon');
    const card3 = document.getElementById('card3');

    // Add click event listener to the icon
    listIcon.addEventListener('click', function(event) {
      // Prevent the default behavior of the link
      event.preventDefault();
      
      // Toggle the visibility of the card3 div
      card3.classList.toggle('show');
    });
});
