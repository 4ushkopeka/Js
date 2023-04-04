function attachEvents() {
    const POSTS_URL = 'http://localhost:3030/jsonstore/blog/posts';
    const COMMENTS_URL = 'http://localhost:3030/jsonstore/blog/comments';
    let posts = document.getElementById('posts');
    let btnLoadPosts = document.getElementById('btnLoadPosts');
    let btnView = document.getElementById('btnViewPost');
    let postsObj = {};
    btnLoadPosts.addEventListener('click', () => {
        fetch(POSTS_URL)
        .then(response => response.json())
        .then(data => {
            postsObj = data;
            for (const key in data) {
                let opt = document.createElement('option');
                opt.value = key;
                opt.textContent = data[key].title;
                posts.appendChild(opt);
            }
        });
    });
    btnView.addEventListener('click', () =>{
        let ul = document.getElementById('post-comments');
        ul.innerHTML = '';
        let post = postsObj[posts.value]
        document.getElementById('post-title').textContent = post.title;
        document.getElementById('post-body').textContent = post.body;
        fetch(COMMENTS_URL)
        .then(response => response.json())
        .then(data => {
            for (const key in data) {
               if(data[key].postId === posts.value){
                    let li = document.createElement('li');
                    li.id = data[key].id;
                    li.textContent = data[key].text;
                    ul.appendChild(li);
               }
            }
        });
    });
}

attachEvents();