// blog.js
document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('blogPosts');
    const backButton = document.getElementById('backButton');
    const themeToggle = document.getElementById('themeToggle');
  
    const renderPosts = () => {
      let posts = JSON.parse(localStorage.getItem('posts')) || [];
      postsContainer.innerHTML = '';
  
      posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.content}</p>
          <p><em>By ${post.username} on ${post.date} </em></p>
        `;
        postsContainer.appendChild(postElement);
      });
    };
  
    renderPosts();
  
    backButton.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  
    themeToggle.addEventListener('change', () => {
      document.body.classList.toggle('dark-theme');
    });
  });
  