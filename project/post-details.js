const url = new URL(location.href);

const postId = url.searchParams.get('id');

const postList = document.getElementById('post');
const commentsBox = document.getElementById('postComments');

fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
    .then(value => value.json())
    .then(post => {
        for (const postKey in post) {
            const value = post[postKey];
            const valueLi = document.createElement('li');
            valueLi.innerHTML = `<span>${postKey}</span>${value}`;
            postList.appendChild(valueLi);
        }
    });
fetch('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments')
    .then(value => value.json())
    .then(comments => {
        const wrapperBox = document.createElement('div');
        const commentsTitle = document.createElement('h2');
        commentsTitle.innerText='All comments of current post:';
        for (const comment of comments) {
            const commentBox = document.createElement('div');

            commentBox.classList.add('comment');

            const commentTitle = document.createElement('h4');
            const commentText = document.createElement('p');
            const commentWriter = document.createElement('p');

            commentTitle.innerText = `${comment["name"]}`;
            commentText.innerText = `${comment["body"]}`;
            commentText.classList.add('commentText');
            commentWriter.innerText = `${comment["email"]}`;

            commentBox.append(commentTitle, commentText, commentWriter);
            wrapperBox.append(commentBox);
        }
        commentsBox.append(commentsTitle, wrapperBox);
    })

