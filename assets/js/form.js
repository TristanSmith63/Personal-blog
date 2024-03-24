document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('blogForm');
  const formMessage = document.getElementById('formMessage');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (username && title && content) {
      // Form data is valid, proceed with redirection
      window.location.href = 'https://developerportfolio.com'; // Redirect to developer portfolio page
    } else {
      // Display error message if form fields are empty
      formMessage.classList.remove('hidden');
    }
  });
});
