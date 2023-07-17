// 1. Реализовать класс Car, который будет иметь следующие свойства:
// company, model, country, volume, color
// 2. Создать два экземпляра (объекта) этого класса
// 3. Вывести в консоль по одному значению свойства на выбор из каждого экземпляра класса
// 5. Реализовать метод incr_volume(), который будет увеличивать объем двигателя на единицу
// 6. Реализовать метод decr_volume(), который будет уменьшать объем двигателя на единицу
// 7. Проверить как работают методы incr_volume() и decr_volume()
// 8. Реализовать методы incr_volume_value() и decr_volume_value(), который будут увеличивать или уменьшать объем на переданное значение
// 9. Создать функцию, которая будет создавать экземпляр класса Car и добавлять его в массив all_cars


class Car{
    constructor(company, model, country, volume, color){
        this.company = company;
        this.model = model;
        this.country = country;
        this.volume = volume;
        this.color = color;
    }

    get_info(){
        console.log(`
        model: ${this.model},
        country: ${this.country},
        color: ${this.color},
        volume: ${this.volume}
        `);
    }
        incr_volume(){
            this.volume++;
        }
        decr_volume(){
            this.volume--;
        }

        incr_volume_value(num){
            this.volume += num;
        }

        decr_volume_value(num){
            this.volume -= num;
        }
    
}



// const car_1 = new Car('Ford','Mustang', 'Canada', 5.0, 'green');
// const car_2 = new Car('Ferrari','Z1', 'France', 5.7, 'blue');
// console.log(car_1);
// console.log(car_2);

// console.log(car_1.company);
// console.log(car_2.color);

// car_1.get_info();
// car_2.get_info();

// car_2.incr_volume();
// console.log(car_2);
// car_1.decr_volume();
// console.log(car_1);
// car_1.incr_volume_value(8);
// console.log(car_1);
// car_2.decr_volume_value(3);
// console.log(car_2);


const all_cars = [];

const addCar = function(company, model, country, volume, color){
    const car = new Car(company, model, country, volume, color)
    all_cars.push(car)
}

addCar('Mazda','RX-7', 'Jupan', 5.0, 'red');
addCar('Ford','Mustang', 'Canada', 5.0, 'green');
addCar('Ferrari','Z1', 'France', 5.7, 'blue');
console.log(all_cars);