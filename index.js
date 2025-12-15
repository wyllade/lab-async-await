const API_URL = 'https://jsonplaceholder.typicode.com/posts';
const postListElement = document.getElementById('post-list');

function displayPosts(posts) {
  if (!postListElement) return;

  postListElement.innerHTML = '';

  posts.forEach(post => {
    const li = document.createElement('li');

    const h1 = document.createElement('h1');
    h1.textContent = post.title; // The test expects titles like 'sunt aut facere repellat...'

    const p = document.createElement('p');
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    postListElement.appendChild(li);
  });
}

async function fetchAndDisplayPosts() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    console.error('Failed to fetch or display posts:', error);
  }
}

fetchAndDisplayPosts();
