// function getUsers(){
//     fetch('https://dummyjson.com/users')
//     .then(function(res){
//         return res.json()
//     })
    
//     .then(function(json){
//     const arr = json.users.map(function({firstName,lastName,email,image}){
//         return {firstName, lastName, email, image}
//         })
//         console.log(arr);
//     })
// }

// getUsers();

const root = document.querySelector('#root');
let usersData = [];

function cards_render(firstName, lastName, email, image){
    const userCard = document.createElement('div');
    const firstNameElem = document.createElement('p');
    const lastNameElem = document.createElement('p');
    const emailElem = document.createElement('a');
    const imageElem = document.createElement('img');
    const button = document.createElement('button');

    firstNameElem.innerText = firstName;
    lastNameElem.innerText = lastName;
    emailElem.innerText = email;
    imageElem.src = image;
    button.innerText = 'Удалить';

    emailElem.href = `mailto:${email}`;

    userCard.classList.add('user');
    imageElem.classList.add('image');

    userCard.append(imageElem, firstNameElem, lastNameElem, emailElem, button);
    root.append(userCard);
}

async function getUsers(callback){
    const res = await fetch('https://dummyjson.com/users');
    const json = await res.json();
    const arr = json.users.map(function({firstName, lastName, email, image}){
        return {firstName, lastName, email, image}
        })
        // console.log(arr);
        callback(arr)

        // arr.forEach(function({firstName, lastName, email, image}){
        //     callback(firstName, lastName, email, image)
        // })   
    }  

getUsers(function(data){
    usersData = data;
    rerender();
});

function rerender(){
    root.innerText = '';
    usersData.forEach(function({firstName, lastName, email, image}){
        cards_render(firstName, lastName, email, image)
    })
}







