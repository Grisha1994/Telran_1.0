const users = [
    {
      first_name: 'Ivan',
      last_name: 'Ivanov',
      age: 20,
      salary: 500
    },
  
    {
      first_name: 'Olga',
      last_name: 'Petrova',
      age: 12,
      salary: 250
    },
  
    {
      first_name: 'Irina',
      last_name: 'Alexandrova',
      age: 46,
      salary: 1500
    },
  
    {
      first_name: 'Denis',
      last_name: 'Sokolov',
      age: 30,
      salary: 760
    }
  ];
  
  
  //1. Пройдитесь по массиву с объектами циклом forEach и выведите каждый элемент в консоль
  // users.forEach((elem) => console.log(elem));
  
  //2. Получите из всех объектов значения last_name и сформируйте из этих имен массив.
  
  const lastnames = users.map(function(el) {
    return el.last_name
  });
  console.log(lastnames);
  
  // 3. Получите из этого массива объект, где first_name == "Olga", и сохраните это в какой-нибудь переменной.
  const olga_user = users.find(function(el){
    return el.first_name === 'Olga'
  }); // возвращает один элемент (самый первы), подощедший под условие
  
  const olga_user_filter = users.filter(function(el){
    return el.first_name === 'Olga'
  })[0]; // возвращает массив со всеми элементами, подощедшими под условие
  
  console.log(olga_user);
  console.log(olga_user_filter);
  
  // 4. Сформируйте новый массив без объекта, где first_name == "Irina"
  
  const users_without_irina = users.filter(function(el){
    return el.first_name !== 'Irina'
  });
  
  // 5. Добавьте в конец нового массива объект со значениями:
  // {
  //   first_name: 'Anton',
  //   last_name: 'Gribov',
  //   age: 36,
  //   salary: 1760
  // }

users_without_irina.push({
  first_name: 'Anton',
  last_name: 'Gribov',
  age: 36,
  salary: 1760
});
console.log(users_without_irina);
  
// 6. Сформируйте массив из совершеннолетних пользователей. И выведите в консоль результат в формате: <Имя> <Фамилия> (<возраст>): <зарплата>.
// ['Ivan Ivanov (20): 500', 'Irina Alexandrova (46): 1500', 'Denis Sokolov (30): 760']

const adult_users = users.filter(function(el){
  return el.age >= 18
}).map(function({ first_name, last_name, age, salary }){
  return `${first_name} ${last_name} (${age}): ${salary}`
});
