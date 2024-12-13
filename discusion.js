function handleLike(button) {
    const likeCountSpan = button.querySelector('.like-count');
    const dislikeButton = button.parentElement.querySelector('.dislike-btn');
    const dislikeCountSpan = dislikeButton.querySelector('.dislike-count');

    let likeCount = parseInt(likeCountSpan.textContent);
    let dislikeCount = parseInt(dislikeCountSpan.textContent);

    if (button.classList.contains('active')) {
        // If already liked, undo the like
        button.classList.remove('active');
        likeCount--;
    } else {
        // Add the like
        button.classList.add('active');
        likeCount++;

        // If the dislike button was active, undo it
        if (dislikeButton.classList.contains('active')) {
            dislikeButton.classList.remove('active');
            dislikeCount--;
        }
    }

    likeCountSpan.textContent = likeCount;
    dislikeCountSpan.textContent = dislikeCount;
}

function handleDislike(button) {
    const dislikeCountSpan = button.querySelector('.dislike-count');
    const likeButton = button.parentElement.querySelector('.like-btn');
    const likeCountSpan = likeButton.querySelector('.like-count');

    let dislikeCount = parseInt(dislikeCountSpan.textContent);
    let likeCount = parseInt(likeCountSpan.textContent);

    if (button.classList.contains('active')) {
        // If already disliked, undo the dislike
        button.classList.remove('active');
        dislikeCount--;
    } else {
        // Add the dislike
        button.classList.add('active');
        dislikeCount++;

        // If the like button was active, undo it
        if (likeButton.classList.contains('active')) {
            likeButton.classList.remove('active');
            likeCount--;
        }
    }

    dislikeCountSpan.textContent = dislikeCount;
    likeCountSpan.textContent = likeCount;
}
