// API URL
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// Get UL element
const postListElement = document.getElementById('post-list');

/**
 * Display posts in the DOM
 */
function displayPosts(posts) {
  if (!postListElement) return;

  postListElement.innerHTML = '';

  posts.forEach(post => {
    const li = document.createElement('li');

    const h1 = document.createElement('h1');
    h1.textContent = post.title;

    const p = document.createElement('p');
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    postListElement.appendChild(li);
  });
}

/**
 * Fetch posts asynchronously
 */
async function fetchAndDisplayPosts() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    console.error('Failed to fetch or display posts:', error);
  }
}

// Initialize
fetchAndDisplayPosts();
