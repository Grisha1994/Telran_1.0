const usersContainer = document.querySelector('.users_container');


function getUsers(num){
fetch(`https://reqres.in/api/users?page=${num}`)
.then(function(res){
    return res.json()
})

.then(function(json){
    cardsRender(json.data)
});

}

getUsers(1);

function cardsRender(users_data){
    usersContainer.innerText = '';
    users_data.forEach(function({ avatar, first_name }){
      const cardElem = document.createElement('div');
      const avatarElem = document.createElement('img');
      const nameElem = document.createElement('p');
  
      nameElem.innerText = first_name;
      
      avatarElem.src = avatar;
      avatarElem.alt = first_name;
  
      cardElem.append(avatarElem, nameElem);
      usersContainer.append(cardElem);

    })
  }
  
const [first_bin, second_btn] = document.querySelectorAll('.trigger button');

first_bin.addEventListener('click', function(){
    getUsers(1)
});

second_btn.addEventListener('click', function(){
    getUsers(2)
});