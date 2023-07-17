let a = 20;

// setTimeout(function(){
//     a = 320;
//     console.log(a);
// }, 2000)

// console.log(a);

const promise = new Promise(function(res, rej){
    setTimeout(function(){
        res( a = 320)
    }, 2000)
}).then(function(){
    render(a)
})

const root = document.querySelector('#root')

function render(num){
    const par = document.createElement('p')
    par.innerText = `Number: ${ num}`;
    root.append(par);
}