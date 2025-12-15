// Write your code here!
// index.js (Replacing the previous fetch block)

// Create function to house fetch and apply async to function
async function fetchAndDisplayPosts() {
    try {
        // Apply await to fetch
        const response = await fetch(API_URL);

        // Check if the response is OK
        if (!response.ok) {
            // Throw an error to be caught by the catch block
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Apply await to response.json() to parse the body
        const posts = await response.json();

        // Call displayPosts() function after successful fetch
        displayPosts(posts);

    } catch (error) {
        // Standard error handling for async/await is a try...catch block
        console.error('Failed to fetch or display posts:', error);
        // Optional: Display an error message to the user
        postListElement.innerHTML = '<li>Error loading posts. Please try again later.</li>';
    }
}

// Call the async function to start the process
fetchAndDisplayPosts();