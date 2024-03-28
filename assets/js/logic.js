// logic.js

// Function to check if local storage is supported
function isLocalStorageSupported() {
    try {
      localStorage.setItem('test', 'test');
      localStorage.removeItem('test');
      return true;
    } catch (e) {
      return false;
    }
  }
  
  // Function to clear form fields
  function clearFormFields() {
    document.getElementById('username').value = '';
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
  }
  
  // Function to get posts from local storage
  function getPostsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('posts')) || [];
  }
  console.log