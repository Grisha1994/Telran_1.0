// fetch('https://api.storerestapi.com/users')
// .then(function(res){return res.json()})
// .then(function(json){cards(json.data)})
async function getUsers(){
const res = await fetch('https://api.storerestapi.com/users');
const json = await res.json();
cards(json.data);
}

getUsers();

const container = document.querySelector('.card_container');

function cards(arr){
arr.map(function({name, email}){
    const userElem = document.createElement('div');
    const nameElem = document.createElement('p');
    const emailElem = document.createElement('a');

    nameElem.innerText = name;
    emailElem.innerText = email;

    emailElem.href = `mailto${email}`;

    userElem.classList.add('user')

    userElem.style.backgroundColor = name[0] === 'D' ? 'lightpink' : 'lightgreen';

    userElem.append(nameElem, emailElem);
    container.append(userElem);

})
}