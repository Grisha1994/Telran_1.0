// 1. Отправить get-запрос по ссылке https://api.escuelajs.co/api/v1/users, получить данные
// 2. Из полученных данных отрисовать карточки с пользователями (name, email, avatar)
//3. Создать форму с тремя инпутами (имя, мэйл, ссылка фото). При отправке формы формируется объект и выводится в консоль
//4. При отправки формы вызывать функцию, отправляющую post-запрос https://api.escuelajs.co/api/v1/users, и передать в эту функцию объект с собранными данными. Полученный ответ вывести в консоль

const users_container = document.querySelector('.users_container');
const add_users_form = document.querySelector('.add_users_form');

function getUsers(){
fetch('https://api.escuelajs.co/api/v1/users')
.then(function(res){
    return res.json();
})
.then(function(json){
    cards_render(json);
})
}

getUsers();

function cards_render(users){
    users_container.innerText = '';
  users.forEach(function({name, email, avatar}){
    const cardElem = document.createElement('div');
    const nameElem = document.createElement('p');
    const emailElem = document.createElement('a');
    const avatarElem = document.createElement('img');

    nameElem.innerText = `Name ${name}`;
    emailElem.innerText = email;
    emailElem.href = `mailto${email}`;
    avatarElem.src = avatar;
    avatarElem.alt = name;



    cardElem.classList.add('cardElem');
    avatarElem.classList.add('image');

    cardElem.append(avatarElem, nameElem, emailElem);
    users_container.append(cardElem);
  })
}

add_users_form.addEventListener('submit', function(event){
    event.preventDefault();
    const { name, email, avatar } = event.target;
    addUser({
        name: name.value,
        email: email.value,
        avatar: avatar.value,
        password: 'password',
        role: 'admin'
    });
    event.target.reset();
});

function addUser(obj){
    fetch('https://api.escuelajs.co/api/v1/users', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',

        }
    })
    .then(function(res){
        return res.json()
      })
      .then(function(json){
        console.log(json);
        getUsers();
      })
}