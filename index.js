const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const ulEl = document.querySelector('#ul-el');

const render = () => {
    let listItems = ""; // we populate then render so that we do not render for every 'for' cycle
    for (let i=0; i<posts.length; i++) {
        listItems += `
            <li>
                <div class="user-info">
                    <img src="${posts[i].avatar}" class="user-avatar" alt="portrait of ${posts[i].name}">
                    <div class="user-info__paragraphs">
                        <p class="name">${posts[i].name}</p>
                        <p class="location">${posts[i].location}</p>
                    </div>
                </div>
                 <div class="post">
                    <img src="${posts[i].post}" class="post-image" alt="painting of ${posts[i].name}">
                    <div class="post-icons">
                        <img src="images/icon-heart.png" class="btn heart-icon" alt="heart icon">
                        <img src="images/icon-comment.png" class="btn comment-icon" alt="comment icon">
                        <img src="images/icon-dm.png" class="btn share-icon" alt="share icon">
                    </div>
                    <p class="likes-counter">${posts[i].likes}</p>
                    <div class="user-caption">
                        <p class="username">${posts[i].username}</p>
                        <p class="user-caption__text">${posts[i].comment}</p>
                    </div>
                </div>
            </li>
        `
    }

    ulEl.innerHTML = listItems;
}

render();

const likes = document.querySelector('.likes-counter');

ulEl.addEventListener('click', (e) => {
    const target = e.target;
    
    // Check if the target is a heart icon
    if (target.classList.contains('heart-icon')) {
        const post = target.closest('.post'); // Get the closest post element
        const likesCounter = post.querySelector('.likes-counter'); // Get the likes counter element
        let likes = parseInt(likesCounter.textContent); // Get the current number of likes
        likes++; // Increment the likes
        likesCounter.textContent = likes; // Update the likes counter in the DOM
    }
})

ulEl.addEventListener('dblclick', (e) => {
    const target = e.target;
    
    // Check if the target is a heart icon
    if (target.classList.contains('post-image')) {
        const post = target.closest('.post'); // Get the closest post element
        const likesCounter = post.querySelector('.likes-counter'); // Get the likes counter element
        let likes = parseInt(likesCounter.textContent); // Get the current number of likes
        likes++; // Increment the likes
        likesCounter.textContent = likes; // Update the likes counter in the DOM
    }
})