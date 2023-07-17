const show_msg_input = document.querySelector('.show_msg_input');
const show_msg_btn = document.querySelector('.show_msg_btn');
const black_btn = document.querySelector('.black_btn');
const body = document.querySelector('body');

// 1. При клике на кнопку содержимое инпута выводится в консоль
show_msg_btn.addEventListener('click',function(){
    console.log(show_msg_input.value);
})

// 2. При клике на кнопку менять цвет заднего фона на черный

black_btn.addEventListener('click', function(){
    body.style.background = 'black';
    // body.style.background = 'red'; 
})

// 3. При клике на кнопку менять цвет заднего фона на черный, при повторном клике - обртано на белый

black_btn.addEventListener('click', function(){
    body.classList.toggle('back_color')
})

// 4. При клике на кнопку менять цвет заднего фона на цвет из массива

let change_btn = document.querySelector(".change_btn");
let color = ['pink', 'blue', 'yellow', 'green'];

let index_1 = -1;
change_btn.addEventListener("click", function () {
    index++;
    if (index == color.length)
        index = 0;
    document.body.style.background = color[index_1];
});

let change_btn1 = document.querySelector(".change_btn");
let color1 = ['pink', 'blue', 'yellow', 'green'];
let color_index = 0;
change_btn1.addEventListener('click', () => {
  document.body.style.backgroundColor = color1[color_index++ % color.length]
});

// color_index++ % back_colors.length

// 0 % 4 === 0
// 1 % 4 === 1
// 2 % 4 === 2
// 3 % 4 === 3
// 4 % 4 === 0
// 5 % 4 === 1
// 6 % 4 === 2


// 87 % 10 === 7
// 8 коробок
// 7 остаток


// 5. При клике на кнопку менять ее цвет на случайный

const random_btn = document.querySelector('.random_btn')
random_btn.addEventListener("click", function () { 
let x = parseInt(Math.random()*256)
let y = parseInt(Math.random()*256)
let z = parseInt(Math.random()*256)
let color = "rgb(" + x + "," + y + "," + z + ")"
document.body.style.background = color;
})

// parseInt = переводит строку в число при этом число должно быть в начале
const a = Math.ceil(4.000001); // округляет всегда в большую сторону - 5
const b = Math.floor(4.999999); // округляет всегда в меньшую сторону - 4
const c = Math.round(4.65); // округляет по правилам математики - 5

console.log(Math.random() * 255); // 255.9999999 = 255

// 6. при клике на картинку менять картинку на элемент массива

const img_slider = document.querySelector('.img_slider');
const photos = [
    'https://reqres.in/img/faces/1-image.jpg',
    'https://reqres.in/img/faces/2-image.jpg',
    'https://reqres.in/img/faces/3-image.jpg',
    'https://reqres.in/img/faces/4-image.jpg',
    'https://reqres.in/img/faces/5-image.jpg'
  ]
  
  let index_2 = 0;
  img_slider.addEventListener('click', event => {
  event.target.src = photos[index_2++ % photos.length]
});

//7. Создать слайдер с кнопочками

const img_slider1 = document.querySelector('.img_slider1');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');

const photos1 = [
    'https://reqres.in/img/faces/1-image.jpg',
    'https://reqres.in/img/faces/2-image.jpg',
    'https://reqres.in/img/faces/3-image.jpg',
    'https://reqres.in/img/faces/4-image.jpg',
    'https://reqres.in/img/faces/5-image.jpg'
  ]
  
  let index_3 = 0;
  plus.addEventListener('click', () => {
    img_slider1.src = photos1[++index_3 % photos.length]

});

minus.addEventListener('click', () => {
    if( index_3 === 0){
        index_3 = photos1.length
    }
    img_slider1.src = photos1[--index_3 % photos1.length]
});

// // второй ваприант для листания в лево
// // left_btn.addEventListener('click', () => {
// //     photo_index2 = (photo_index2 - 1 + photos.length) % photos.length
// //     img_slider2.src = photos[photo_index2];
// //   });
  
//   // 0 - 1 + 5 % 5 === 4
//   // 1 - 1 + 5 % 5 === 3
//   // 2 - 1 + 5 % 5 === 2

//   // 8. Создать генератор игральных костей

  const dice_btn = document.querySelector('.dice_btn');
  const dice_result = document.querySelector('.dice_result');
  
  const dice_random = () => Math.ceil(Math.random() * 6); // 1-6

  dice_btn.addEventListener('click', () => {
    dice_result.innerText = '';
    const p = document.createElement('p');
    p.innerText = `${dice_random()} X ${dice_random()}`;
    dice_result.append(p)
  });
  
  
// // 9. Создать кнопку с размерами 30х30 px. При клике на кнопку ее размеры увеличиваются на 10px

const incr_btn = document.querySelector('.incr_btn');

let btn_params = 30;

const incr_btn_render = size => {
  incr_btn.style.width = size + 'px';
  incr_btn.style.height = size + 'px';
}

incr_btn_render(btn_params);

incr_btn.addEventListener('click', event => {
btn_params +=10;
incr_btn_render(btn_params);

let x = parseInt(Math.random()*256)
let y = parseInt(Math.random()*256)
let z = parseInt(Math.random()*256)
let color = "rgb(" + x + "," + y + "," + z + ")"
event.target.style.backgroundColor = color;
});

const change_text_btn = document.querySelector('.change_text_btn');
const change_text_input = document.querySelector('.change_text_input');

change_text_btn.addEventListener('click', () => {
  change_text_input.value = '!!!';
})

change_text_btn.addEventListener('click', () => {
  if(change_text_input.value.includes('?')){
    change_text_input.value = ''
  }
  change_text_input.value += '!'
});



const text_btn = document.querySelector('.text_btn');
const text_input = document.querySelector('.text_input');

let input = [ '!!!', '...', '???'];
let index_4 = 0;
text_btn.addEventListener('click', () => {
  text_input.value = input[index_4++ % input.length]
});


// 12. Создать кнопку и пустой див. При клике на кнопку создавать 
// внутри дива параграф с произвольным текстом. Цвет текста дожен быть
// сначала синий, потом зеленый

const create_p_btn = document.querySelector('.create_p_btn');
const create_p_container = document.querySelector('.create_p_container');

const col = ['blue', 'green']
let index = 0;
create_p_btn.addEventListener('click', () => {
    const p = document.createElement('p');
    p.innerText = 'Grisha';
    create_p_container.append(p); 
    p.style.color = col[index++ % col.length];
    
});

const teg_input = document.querySelector('.teg_input');
const content_input = document.querySelector('.content_input');
const color_teg = document.querySelector('.color_teg');
const create_teg_btn = document.querySelector('.create_teg_btn');
const create_teg_container = document.querySelector('.create_teg_container');

create_teg_btn.addEventListener('click', () => { 

    const elem = document.createElement(`${teg_input.value}`);
    elem.innerText = content_input.value;
    create_teg_container.append(elem); 
    elem.style.color = color_teg.value;

});