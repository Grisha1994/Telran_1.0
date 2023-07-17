const cvs = document.querySelector('#cvs');
const ctx = cvs.getContext('2d');

cvs.width = window.innerWidth;
cvs.height = window.innerHeight;

const size = 50;
const count = 10;

// for (let i = 0; i < 6; i++) {
//     ctx.fillRect(0 + i * size, 0 + i * size, size, size); 
// } 

// for (let i = 0; i < count; i++) {
//     ctx.fillRect(size * (count - 1) - size * i, size * i, size, size); 
// }

// ctx.fillRect(0, 0, 100, 100);


// ------ne pravilnii variant
// for (let i = 0; i < count; i++) {
//     ctx.fillRect(0 + size * i, 0, size, size); 
//     ctx.fillRect(0 + size * i, 450, size, size);
//     ctx.fillRect(0, 0 + size * i, size, size);
//     ctx.fillRect(450, 0 + size * i, size, size);
//     for (let i = 0; i < count; i++) {
//     ctx.fillRect(size * i, 0 * (count - 1) + size * i, size, size); 
// }
// } 

// function handler(count){
//     for (let j = 0; j < count; j++) {
//         for (let i = 0; i < count; i++) {
//             if( j === 0 || j === count - 1 ||
//                 i === 0 || i === count - 1 ||
//                 i === j){
//                     ctx.fillRect(i * size, j * size, size, size)
//                 }
            
//         }
        
//     }
// }

// handler(13);

function handler(count){
    for (let j = 0; j < count; j++) {
        for (let i = 0; i < count; i++) {
            if((i + j) % 2 === 1){
                    ctx.fillStyle = 'black'
                    ctx.fillRect(i * size, j * size, size, size)
                }else{
                    ctx.fillStyle = 'orange'
                    ctx.fillRect(i * size, j * size, size, size)
                }
            
        }
        
    }
}

handler(10);


// ctx.beginPath();
// ctx.moveTo(cvs.width / 2, cvs.height / 2);
// ctx.lineTo(cvs.width / 2 + 50, cvs.height / 2 + 50);
// ctx.lineTo(cvs.width / 2 + 50, cvs.height / 2 - 50);
// ctx.stroke();


// нарисовать квадрат при помощи линий
// квадрат должен быть в центре (центр квадрата совпадает с центром жкрана)
// сторона квадрата должна быть 200

// ctx.beginPath();
// ctx.moveTo(cvs.width / 2 - 100, cvs.height / 2 - 100);
// ctx.lineTo(cvs.width / 2 - 100 , cvs.height / 2 + 100);
// ctx.lineTo(cvs.width / 2 + 100, cvs.height / 2 + 100);
// ctx.lineTo(cvs.width / 2  + 100, cvs.height / 2 - 100);
// ctx.lineTo(cvs.width / 2 - 100, cvs.height / 2 -100);
// ctx.stroke();


// const deg2PI = (deg) => {
//     const oneDeg = Math.PI / 180;
//     return deg * oneDeg
// }

// // ctx.fillStyle = 'orange'
// // ctx.beginPath();

// // ctx.moveTo(cvs.width / 2, cvs.height / 2);
// // ctx.arc(cvs.width/2, cvs.height/2, 100, deg2PI(45), deg2PI(325));
// // ctx.lineTo(cvs.width / 2, cvs.height / 2);
// // ctx.stroke();
// // ctx.fill();



// function render(){
    
//     for (let i = 1; i < 10; i++) {
        
//         if(i % 2 === 1){
            
//             ctx.fillStyle = 'orange'
//             ctx.beginPath();
//             ctx.moveTo(cvs.width / 2, cvs.height / 2);
//             ctx.arc(cvs.width/2, cvs.height/2, 100, deg2PI(45), deg2PI(325));
//             ctx.lineTo(cvs.width / 2, cvs.height / 2); 
//             ctx.fill();
            
    
//         } else {
//             ctx.fillStyle = 'blue'
//             ctx.beginPath();
//             ctx.moveTo(cvs.width / 2 , cvs.height / 2);
//             ctx.arc(cvs.width/2, cvs.height/2, 200, deg2PI(1), deg2PI(360)); 
//             ctx.lineTo(cvs.width / 2 , cvs.height / 2);
//             ctx.fill();
            
    
//         }
        
        
//     }
//     ctx.fillStyle = 'black'
//     ctx.beginPath();
//     ctx.arc(cvs.width/2, cvs.height/2 - 50, 10, deg2PI(0), deg2PI(360));
//     ctx.fill();
// }
// console.log(setInterval(render, 100));
// setInterval(render, 100);

// ctx.fillStyle = 'black'
// ctx.beginPath();
// ctx.arc(cvs.width/2, cvs.height/2 - 50, 10, deg2PI(0), deg2PI(360));
// ctx.stroke();
// ctx.fill();


// нарисовать 10 окружностей с разницей радиуса 10 (от 10 до 110)
// центр этих окружностей должен совпадать друг с другом и с центром страницы

// const deg2PI = (deg) => {
//     const oneDeg = Math.PI / 180;
//     return deg * oneDeg
// }


// for (let i = 0; i < 11; i++) {
//     ctx.beginPath();
//     ctx.arc(cvs.width/2, cvs.height/2, 20 * i, deg2PI(0), deg2PI(360));
//     ctx.stroke();
    
// }




// const deg2PI = (deg) => {
//     const oneDeg = Math.PI / 180;
//     return deg * oneDeg
// }

// let circle = 1

// function render(){
//     ctx.clearRect(0, 0, cvs.width, cvs.height);
//     for (let i = 0; i <= circle; i++) {
//         ctx.beginPath();
//         ctx.arc(cvs.width/2, cvs.height/2, 10 * i, deg2PI(0), deg2PI(360));
//         ctx.stroke();  
//     }
//     circle++;
// }

// setInterval(render, 100);



