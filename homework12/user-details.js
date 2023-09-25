const url = new URL(location.href);

const userId = url.searchParams.get('id');

const userList = document.getElementById('user');

fetch('https://jsonplaceholder.typicode.com/users/' + userId)
    .then(value => value.json())
    .then(user => {
        const extractorDataFromObj = (user, userList) => {
            for (const userKey in user) {
                console.log(user[userKey]);
                const value = user[userKey];
                if (typeof value === 'object') {
                    const valueLi = document.createElement('li');
                    valueLi.innerText = `${userKey}`;
                    userList.appendChild(valueLi);
                    const valueUl = document.createElement('ul');
                    userList.appendChild(valueUl);
                    extractorDataFromObj(value, valueUl);
                } else {
                    const valueLi = document.createElement('li');
                    valueLi.innerText = `${userKey} - ${value}`;
                    userList.appendChild(valueLi);
                }

            }
        }
        extractorDataFromObj(user, userList);
    })