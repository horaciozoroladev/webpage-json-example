
(() => {
    getPosts()
        .then(response => {
            setPosts(response)
        })
        .catch(error => {
            throw error;
        })
})();


function getPosts() {
    return fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'GET',
        }
    )
        .then((response) => response.json())
        .then((response) => response);
}

function setPosts(posts) {
    if (posts.length > 0) {
        const _posts = document.getElementById('posts');

        let _post = ``
        posts.forEach( (post) => {
            _post = _post + `
            
            <div class="post">
                <h1>${post.title}</h1>
                <p>${post.body}</p>
            </div>

            `
        })
        _posts.innerHTML = _post;
    } else {
        alert('no hay posts')
    }
}


