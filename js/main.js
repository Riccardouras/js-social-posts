const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
// funzione che mi servirà per cambiare i likes
function footer(item, box) {
    let footer = document.createElement('div')
    footer.setAttribute('class', 'post_footer')
    footer.innerHTML = ''
    footer.innerHTML = `
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" data-postid="1">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter"> Piace a <b id="like-counter-${item.id}" class="js-likes-counter">${item.likes}</b> persone</div>
        </div> 
    `
    box.append(footer)
}

// funzione di creazione dei post 
function createPost() {
    const container = document.getElementById('container')
    posts.forEach((item) => {
        let box = document.createElement('div')
        box.setAttribute('class', 'post')
        let top = document.createElement('div')
        top.setAttribute('class', 'post_header')
        top.innerHTML = `
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${item.author.image}" alt="${item.author.name}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${item.author.name}</div>
                    <div class="post-meta__time">${item.created}</div>
                </div>                    
            </div>
        `
        let text = document.createElement('div')
        text.setAttribute('class', 'post_text')
        text.innerHTML = `${item.content}`
        let img = document.createElement('div')
        img.setAttribute('class', 'post__image')
        img.innerHTML = `<img src="${item.media}" alt="${item.author.name}">`

        container.append(box)
        box.append(top)
        box.append(text)
        box.append(img)
        footer(item, box)
    })
}
createPost()
