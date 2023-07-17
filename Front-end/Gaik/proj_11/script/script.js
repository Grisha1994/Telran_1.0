function createPost(title, body){
    const container = document.createElement('div');
    const pTitle = document.createElement('p');
    const pBody = document.createElement('p');
    pTitle.innerText = title;
    pBody.innerText = body;

    pTitle.classList.add('title');
    pBody.classList.add('text');

    container.append(pTitle, pBody);

    return container
}

const link = 'https://jsonplaceholder.typicode.com/posts';
const posts = document.querySelector('.posts')
// fetch(link).then(function(resp){
//     resp.json().then(function(data){
//         console.log(data);
//     })
// })

fetch(link)
    .then(function(resp){
    return resp.json()
    })
    .then(function(data){
            data.forEach(function ({title, body}){
                const newElement = createPost(title, body);
                posts.append(newElement);  
            })
});






// const request = new Promise(function(resolve, reject){
//     const number = Math.random();
//     if(number < 0.5){
//         resolve(number);
//     }else{
//         reject(number);
//     }
// })

// request.then(function(value){
//     console.log(`позитивный исход ${value}`)
// },
// function(value){
//     console.log(`негативный исход ${value}`)
// })