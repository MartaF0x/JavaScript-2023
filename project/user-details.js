const url = new URL(location.href);

const userId = url.searchParams.get('id');

const userList = document.getElementById('user');
fetch('https://jsonplaceholder.typicode.com/users/' + userId)
    .then(value => value.json())
    .then(user => {
        const extractorDataFromObj = (user, userList) => {
            for (const userKey in user) {
                const value = user[userKey];
                if (typeof value === 'object') {
                    const valueLi = document.createElement('li');
                    valueLi.innerHTML = `<span>${userKey}:</span>`;
                    userList.appendChild(valueLi);
                    const valueUl = document.createElement('ul');
                    userList.appendChild(valueUl);
                    extractorDataFromObj(value, valueUl);
                } else {
                    const valueLi = document.createElement('li');
                    valueLi.innerHTML = `<span>${userKey}</span>${value}`;
                    userList.appendChild(valueLi);
                }
            }
        }
        extractorDataFromObj(user, userList);
    })
const postsButt = document.getElementById('userPostsBut');

let count = 0;
postsButt.addEventListener('click', async function () {
    count++;
    if (!count) {
        postsButt.removeAttribute("disabled");
    } else {
        postsButt.setAttribute("disabled", "disabled");
    }

    let posts = await fetch('https://jsonplaceholder.typicode.com/users/' + userId + '/posts')
        .then(value => value.json());

    const postsBox = document.createElement('section');
    const postsTitle = document.createElement('h2');
    const wrapperBox = document.createElement('div');
    postsBox.id = 'posts';
    document.body.appendChild(postsBox);
    postsTitle.innerText = 'All posts of current user:';
    postsBox.append(postsTitle, wrapperBox);
    for (const post of posts) {
        const postBox = document.createElement('div');
        postBox.classList.add('post');
        wrapperBox.appendChild(postBox);

        const postTitle = document.createElement('h4');
        postTitle.innerText = `${post["title"]}`;

        const postDetButton = document.createElement('button');
        const postDetails = document.createElement('a');

        postDetButton.innerText = 'details...';
        postDetails.href = 'post-details.html?id=' + post["id"];

        postDetails.appendChild(postDetButton);

        postBox.append(postTitle, postDetails);
    }
    window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
})