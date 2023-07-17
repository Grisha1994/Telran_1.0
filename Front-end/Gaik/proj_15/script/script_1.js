const obj = {
    username: 'Grisha',
    hello:()=>{
        console.log(`Hello, ${this.username}!`)
    }
}

const obj_1 = {
    username: 'Grisha',
    hello: function(){
        console.log(`Hello, ${this.username}!`)
    }
}

const obj_2 = {
    username: 'Anton'
}

obj_2.hello = obj_1.hello;

obj.hello();
obj_1.hello();
obj_2.hello();