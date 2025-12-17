// ===============================
// API URL
// ===============================
// This is the external API we are fetching posts from
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// ===============================
// DOM Reference
// ===============================
// Select the <ul> element where posts will be displayed
const postList = document.getElementById('post-list');

// ===============================
// Function: displayPosts
// ===============================
// This function receives an array of post objects
// and displays each post on the page
function displayPosts(posts) {
  // Clear any existing content inside the list
  postList.innerHTML = '';

  // Loop through each post in the array
  posts.forEach(post => {
    // Create a list item to hold each post
    const li = document.createElement('li');

    // Create an h1 element for the post title
    const h1 = document.createElement('h1');
    h1.textContent = post.title; // Set title text

    // Create a paragraph element for the post body
    const p = document.createElement('p');
    p.textContent = post.body; // Set body text

    // Append title and body to the list item
    li.appendChild(h1);
    li.appendChild(p);

    // Append the list item to the <ul>
    postList.appendChild(li);
  });
}

// ===============================
// Function: fetchPosts (Async/Await)
// ===============================
// This function fetches posts from the API
// using async/await for cleaner asynchronous code
async function fetchPosts() {
  try {
    // Send request to the API and wait for the response
    const response = await fetch(API_URL);

    // Convert the response into JavaScript objects
    const posts = await response.json();

    // Call displayPosts to render posts on the page
    displayPosts(posts);
  } catch (error) {
    // Log any errors that occur during fetching
    console.error('Error fetching posts:', error);
  }
}

// ===============================
// Load Data When Page Loads
// ===============================
// Wait until the DOM is fully loaded before fetching posts
document.addEventListener('DOMContentLoaded', fetchPosts);
