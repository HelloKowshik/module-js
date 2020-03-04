let user = { id: 1001, name: 'user-1' };
let json = JSON.stringify(user);
console.log(typeof json);
console.log(json);
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => userList(json));
  
function userList(users) {
    let parent = document.getElementById('user-list');
    let userName = users.map(user => user.username);
    for (let i = 0; i < userName.length; i++){
    let li = document.createElement('li');
        li.innerHTML = userName[i];
        parent.appendChild(li);
        console.log(userName[i]);

    }
}