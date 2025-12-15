// API endpoint for posts
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// Select the UL element
const postListElement = document.getElementById('post-list');

/**
 * Display posts in the UL element.
 * @param {Array} posts - Array of post objects from the API.
 */
function displayPosts(posts) {
    // Check if UL exists
    if (!postListElement) {
        console.error("UL element with id 'post-list' not found.");
        return;
    }

    // Clear existing posts
    postListElement.innerHTML = '';

    // Loop through posts and create elements
    posts.forEach(post => {
        const li = document.createElement('li');

        const title = document.createElement('h1');
        title.textContent = post.title;

        const body = document.createElement('p');
        body.textContent = post.body;

        li.appendChild(title);
        li.appendChild(body);
        postListElement.appendChild(li);
    });
}

/**
 * Fetch posts from the API and display them.
 * Uses async/await with try/catch for error handling.
 */
async function fetchAndDisplayPosts() {
    try {
        const response = await fetch(API_URL);

        // Check if response is OK
        if (!response.ok) {
            throw new Error(`Failed to fetch posts. Status: ${response.status}`);
        }

        const posts = await response.json();

        // Display posts in the DOM
        displayPosts(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        if (postListElement) {
            postListElement.innerHTML = `<li style="color:red;">Error: ${error.message}</li>`;
        }
    }
}

// Initialize app
fetchAndDisplayPosts();
