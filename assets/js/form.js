document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("blogForm");
  const formMessage = document.getElementById("formMessage");
  
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    const username = document.getElementById("username").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const date = new Date()
    console.log(date.toLocaleDateString)
    if (username && title && content) {
      // Form data is valid, proceed with redirection
      let allpost = JSON.parse(localStorage.getItem("posts")) || [];
      allpost.push({ username: username, title: title, content: content, date: date.toLocaleDateString()});
      localStorage.setItem("posts", JSON.stringify(allpost));

      window.location.href = "blog.html"; // Redirect to developer portfolio page
    } else {
      // Display error message if form fields are empty
      formMessage.classList.remove("hidden");
    }
  });
});
