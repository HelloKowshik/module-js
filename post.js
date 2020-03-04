// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'A simple Post Title',
//       body: 'Post Body goes here',
//       userId: 1
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8"
//     }
//   })
//   .then(response => response.json())
//   .then(json => console.log(json))

let btn = document.getElementById('btn');
// let title = document.getElementById('title').value;
// let body = document.getElementById('post-body').value;
// function postData(title, data) {
//     return {
//         id:1012,
//         title: title,
//         data: data
//     }   
// }
// let post1 = postData(title, body);
btn.addEventListener('click', function () {
let title = document.getElementById('title').value;
let body = document.getElementById('post-body').value;
function postDataObject(title, data) {
    return {
        title: title,
        data: data
    }   
}
    let post1 = postDataObject(title, body);
    postData(post1);
});
function postData(posts) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(posts),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(json => console.log(json))  
}