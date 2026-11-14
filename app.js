fetch('http://127.0.0.1:8000/api/posts')
    .then(response => response.json())
    .then(data => {
        let postsDiv = document.getElementById('posts');

        data.data.forEach(post => {
            postsDiv.innerHTML += `
                <h3>${post.title}</h3>
                <p>${post.description}</p>
                <hr>
            `;
        });
    })
    .catch(error => console.error(error));


    function searchPost() {
    let value = document.getElementById('search').value;

    fetch(`http://127.0.0.1:8000/api/posts?search=${value}`)
        .then(res => res.json())
        .then(data => {
            let postsDiv = document.getElementById('posts');
            postsDiv.innerHTML = '';

            data.data.forEach(post => {
                postsDiv.innerHTML += `<h3>${post.title}</h3>`;
            });
        });
     
}


function createPost() {
    let formData = new FormData();

    formData.append('poster_name', 'Ali');
    formData.append('title', document.getElementById('title').value);
    formData.append('description', document.getElementById('description').value);
    formData.append('is_home_post', 1);
    formData.append('category_ids[]', 1);

    let image = document.getElementById('image').files[0];
    formData.append('image', image);

    fetch('http://127.0.0.1:8000/api/user/posts', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer 3|AUtBPTx8OtVWbTmmdiMJFXdKfcGSerYxJw9TYMhNb7b6e5bf'
        },
        body: formData
    })
    .then(res => res.json())
    .then(data => console.log(data));
}