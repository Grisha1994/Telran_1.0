let arr = [];

fetch('https://dummyjson.com/users')
.then(function(res){
    return res.json()
})

.then(function(json){
    console.log(json.users)
    cardsRender(json.users)
})

const users_container = document.querySelector('.users_container');


function cardsRender(arr){

    arr.map(function({id, image, firstName, lastName, email, company, bank /*:{department, address:{address}}*/}){

        //const {department, address:{address}} = company;
        const {department, address} = company;
        const {cardExpire, cardNumber} = bank

        const container = document.createElement('div');
        const imageUrl = document.createElement('img')
        const NameEL = document.createElement('p')
        const emailEl = document.createElement('a')
        const addressEL = document.createElement('p')
        const departmentEL = document.createElement('p')
        const bankEL = document.createElement('p')
       
        
        
        // NameEL.innerText = `${firstName} ${lastName}`;
        NameEL.innerText = firstName + lastName;
        emailEl.innerText = email;
        // emailEl.setAttribute('href', `mailto:${email}`);
         emailEl.href = `mailto: ${email}`;
        imageUrl.src = image;
        addressEL.innerText = `Address: ${address.address}, ${address.city}`;
        departmentEL.innerText = `Department name: ${department}`;
        bankEL.innerText = `${cardExpire}, ${cardNumber}`;
     

        
        container.append(imageUrl, NameEL, emailEl, addressEL, departmentEL, bankEL);
        users_container.append(container);
        
    });
    
}