// index.js

// 1. FIX: Declare API_URL and postListElement globally
const API_URL = 'https://jsonplaceholder.typicode.com/posts';
const postListElement = document.getElementById('post-list');

function displayPosts(posts) {
    // 2. FIX: Graceful exit if the element is not found (prevents TypeError)
    if (!postListElement) {
        console.error("UL element with id 'post-list' not found.");
        return;
    }

    postListElement.innerHTML = ''; 

    posts.forEach(post => {
        const li = document.createElement('li');

        const h1 = document.createElement('h1');
        h1.textContent = post.title; // Should now work

        const p = document.createElement('p');
        p.textContent = post.body; // Should now work

        li.appendChild(h1);
        li.appendChild(p);

        postListElement.appendChild(li);
    });
}

async function fetchAndDisplayPosts() {
    try {
        const response = await fetch(API_URL); // FIX: API_URL is now defined
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const posts = await response.json();
        
        displayPosts(posts); 

    } catch (error) {
        console.error('Failed to fetch or display posts:', error);
    }
}

fetchAndDisplayPosts();