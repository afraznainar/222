// Sample posts data for Explore Page
const samplePosts = [
    {
        id: 1,
        user: 'User1',
        content: 'This is a sample post!',
        media: 'https://via.placeholder.com/300',
        views: 100,
        reposts: 2,
        shares: 5,
        reactions: {
            heart: 0,
            laugh: 0,
            mindblown: 0,
            surprised: 0,
            angry: 0
        },
        comments: [],
    },
    {
        id: 2,
        user: 'User2',
        content: 'Another interesting post!',
        media: 'https://via.placeholder.com/300',
        views: 150,
        reposts: 3,
        shares: 2,
        reactions: {
            heart: 0,
            laugh: 0,
            mindblown: 0,
            surprised: 0,
            angry: 0
        },
        comments: [],
    },
    // Add more sample posts as needed
];

// Function to render posts on Explore Page
function renderPosts() {
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = ''; // Clear existing posts

    samplePosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <h4>${post.user}</h4>
            <p>${post.content}</p>
            <img src="${post.media}" alt="Post Media">
            <div class="reaction-container">
                <div class="reaction-count">Views: ${post.views} | Reposts: ${post.reposts} | Shares: ${post.shares}</div>
                <div class="emoji-reactions">
                    <span class="emoji" onclick="reactToPost(${post.id}, '❤️')">❤️ ${post.reactions.heart}</span>
                    <span class="emoji" onclick="reactToPost(${post.id}, '😂')">😂 ${post.reactions.laugh}</span>
                    <span class="emoji" onclick="reactToPost(${post.id}, '🤯')">🤯 ${post.reactions.mindblown}</span>
                    <span class="emoji" onclick="reactToPost(${post.id}, '😮')">😮 ${post.reactions.surprised}</span>
                    <span class="emoji" onclick="reactToPost(${post.id}, '😡')">😡 ${post.reactions.angry}</span>
                </div>
            </div>
            <div class="post-actions">
                <button onclick="repost(${post.id})"><i class="fas fa-retweet"></i></button>
                <button onclick="sharePost(${post.id})"><i class="fas fa-share"></i></button>
            </div>
            <div class="comment-section">
                <input type="text" id="commentInput${post.id}" placeholder="Add a comment...">
                <button onclick="addComment(${post.id})"><i class="fas fa-comment"></i></button>
            </div>
            <div class="comments" id="comments${post.id}">
                ${post.comments.map(comment => `<div class="comment">${comment}</div>`).join('')}
            </div>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Function to handle reactions
function reactToPost(postId, emoji) {
    const post = samplePosts.find(p => p.id === postId);
    post.reactions[emoji] = (post.reactions[emoji] || 0) + 1; // Increment the reaction count
    renderPosts();
}

// Function to repost
function repost(postId) {
    const post = samplePosts.find(p => p.id === postId);
    post.reposts++;
    renderPosts();
}

// Function to share post
function sharePost(postId) {
    const post = samplePosts.find(p => p.id === postId);
    post.shares++;
    alert(`Post #${postId} shared!`); // Placeholder for share functionality
    renderPosts();
}

// Function to add comment
function addComment(postId) {
    const commentInput = document.getElementById(`commentInput${postId}`);
    const comment = commentInput.value;

    if (comment) {
        const post = samplePosts.find(p => p.id === postId);
        post.comments.push(comment);
        commentInput.value = ''; // Clear input
        renderPosts();
    }
}

// Initial load of posts
renderPosts();

