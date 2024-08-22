
const postsContainer = document.getElementById('postsContainer');
// const searchBar = document.getElementById('searchBar');
let posts = JSON.parse(localStorage.getItem('posts')) || [];
let currentTextarea = null; // Variable to track the currently active textarea

// Function to display posts
function displayPosts(filteredPosts = posts) {
    postsContainer.innerHTML = '';
    filteredPosts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <p><strong>Category:</strong> ${post.category}</p>
                <p>
                    <button class="like-button ${post.userLiked ? 'liked' : 'unliked'}" onclick="toggleLike(${index})">
                        ❤️
                    </button>
                    <span id="likeCount${index}">${post.likes}</span> Likes
                </p>
                <p><strong>💬</strong></p>
                <ul>${post.comments.map(comment => `<li>${comment}</li>`).join('')}</ul>
                <p>
                    <button class="emoji-picker-button" data-index="${index}">😊</button>
                    <div class="emoji-picker" id="emoji-picker-${index}">
                        <span class="emoji" onclick="addEmoji('😊', ${index})">😊</span>
                        <span class="emoji" onclick="addEmoji('😂', ${index})">😂</span>
                        <span class="emoji" onclick="addEmoji('😍', ${index})">😍</span>
                        <span class="emoji" onclick="addEmoji('😎', ${index})">😎</span>
                        <span class="emoji" onclick="addEmoji('😢', ${index})">😢</span>
                        <span class="emoji" onclick="addEmoji('😡', ${index})">😡</span>
                        <span class="emoji" onclick="addEmoji('🥳', ${index})">🥳</span>
                        <span class="emoji" onclick="addEmoji('🤔', ${index})">🤔</span>
                        <!-- Add more emojis as needed -->
                    </div>
                </p>
                <textarea id="commentBox${index}" placeholder="Add a comment..." onkeypress="addComment(event, ${index})"></textarea>
                <div class="share-dropdown">
                    <button class="share-button">🔗</button>
                    <div class="share-content">
                        <a href="https://wa.me/?text=${encodeURIComponent(post.title + '\n' + post.content)}" target="_blank">WhatsApp</a>
                        <a href="https://www.instagram.com/" target="_blank">Instagram</a>
                        <a href="mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(post.content)}" target="_blank">Email</a>
                    </div>
                </div>
            `;
        postsContainer.appendChild(postElement);
    });

    // Add event listeners to emoji picker buttons
    document.querySelectorAll('.emoji-picker-button').forEach(button => {
        button.addEventListener('click', function () {
            currentTextarea = document.getElementById(`commentBox${this.dataset.index}`);
            toggleEmojiPicker(this);
        });
    });
}

// Function to add emoji to the comment box
function addEmoji(emoji, index) {
    if (currentTextarea) {
        currentTextarea.value += emoji;
        toggleEmojiPicker(document.querySelector(`.emoji-picker-button[data-index="${index}"]`));
    }
}

// Function to toggle the emoji picker visibility
function toggleEmojiPicker(button) {
    const emojiPicker = document.getElementById(`emoji-picker-${button.dataset.index}`);
    emojiPicker.classList.toggle('show');
}

// Function to toggle like
function toggleLike(index) {
    const post = posts[index];
    post.userLiked = !post.userLiked;
    post.likes += post.userLiked ? 1 : -1;
    localStorage.setItem('posts', JSON.stringify(posts));
    displayPosts();
}

// Function to add comment
function addComment(event, index) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        const commentBox = document.getElementById(`commentBox${index}`);
        const commentText = commentBox.value.trim();
        if (commentText) {
            posts[index].comments.push(commentText);
            localStorage.setItem('posts', JSON.stringify(posts));
            displayPosts();
        }
        commentBox.value = '';
    }
}

// // Search function
// searchBar.addEventListener('input', function () {
//     const query = searchBar.value.toLowerCase();
//     const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(query) || post.content.toLowerCase().includes(query));
//     displayPosts(filteredPosts);
// });

// Initial display
displayPosts();