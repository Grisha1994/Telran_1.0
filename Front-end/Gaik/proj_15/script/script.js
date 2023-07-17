class Dog{

    constructor(name, weidht){
        this.name = name;
        this.weidht = weidht;
    }

    bark(){
        console.log('bark-bark');
    }
}

// const dog_1 = new Dog();
// dog_1.init('Sharik', 15);

// dog_1.init();
// console.log('Sharik', 15);
// dog_1.bark();

// const dog_2 = new Dog();
// dog_2.init('Bobik', 25);

const dog_1 = new Dog('Sharik', 15);
const dog_2 = new Dog('Bobik', 25);

// console.log(dog_1);
// console.log(dog_2);

class User{
    constructor(name, userName, age){
        this.name = name;
        this.userName = userName;
        this.age = age;
    }
    bDay(){
        this.age++;
    }

    changeUsername(name){
        this.name = name;
    }

}



// const user_1 = new User('Grisha','Luter', 15);
// const user_2 = new User('Tom','Keller', 25);

// console.log(user_1);
// user_1.changeUsername('Gosha');
// user_1.bDay();
// console.log(user_1);
// console.log(user_2);



class Product{
    static totalSale = 0;

    static totalSum(){
       return this.all.reduce(function(acc, {price}){
            return acc + price;
        }, 0);
    }

    static all = [];

    constructor(title, price, count){
        this.title = title;
        this.price = price;
        this.count = count;
        Product.all.push(this);
    }

    changePrice(price){
        
        if(price < 0){
            console.log('цена не может быть отрицательной');
        }else{
            this.price = price;
        }
    }

    sale(){
        if(this.count === 0){
            console.log('товар закончился');
        }else{
            this.count--;
            Product.totalSale += this.price;
        }
    }
}

// const Product_1 = new Product('Laptop', 4000, 2);
// const Product_2 = new Product('Asus', 3000, 12);
// console.log(Product_1);
// // Product_1.changePrice(-3423);
// // Product_1.changePrice(3400);
// Product_1.sale();
// Product_1.sale();
// Product_1.sale();
// Product_1.sale();
// console.log(Product_1);

// let products = [];

// products.push(new Product('Vivo', 4000, 2));
// products.push(new Product('Asus', 3000, 12));
// products.push(new Product('Asus', 3200, 9));

// console.log(product);

// const sumProduct = products.reduce(function(acc, {price}){
//    return acc + price;
     
// }, 0);
// console.log(sumProduct);

new Product('Vivo', 4000, 2);
new Product('Asus', 3000, 2);
new Product('Asus', 3300, 3);

Product.all[0].sale();
Product.all[0].sale();
Product.all[1].sale();

console.log(Product.all);
console.log(Product.totalSum());
console.log(Product.totalSale);
