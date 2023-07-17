const form = document.querySelector('.add_task');
const tasks = document.querySelector('.tasks')

let tasksArray = JSON.parse(localStorage.getItem('tasks')) ?? [];


form.addEventListener('submit', function(event){
    event.preventDefault();
    
    const {title, priority} = event.target;
    // const title = event.target.title
    // const priority = event.target.priority

    tasksArray.push({
        id: Date.now(),
        title: title.value,
        priority: +priority.value,
    });
    
    rerender();
    
    // const newEl = createTask(title.value, priority.value);
    // tasks.append(newEl);
    event.target.reset();
})



function createTask(id, title, priority){
        
        const container = document.createElement('div');
        const titleEl = document.createElement('p');
        const buttonEl = document.createElement('button')
        titleEl.innerText = title;
        buttonEl.innerText = "Удалить";
        container.append(titleEl, buttonEl);


        if( +priority === 1){
            container.style.backgroundColor = 'red'
        } else {
            container.style.backgroundColor = 'blue'
        }

        container.addEventListener('dblclick', function(){
          console.log('hi');
          const task = tasksArray.find(function(item){
            return item.id === id
          })
          task.priority = task.priority === 1 ? 2 : 1;
          rerender();
        })

        buttonEl.addEventListener("click", function(){ 
            tasksArray = tasksArray.filter(function(item){
                return item.id !== id
            });
            rerender();
        })
        return container

    
}

function calculate(){
    //    const imp = tasksArray.filter(function({priority}){
    //     return priority === 1 
    //    }).length;
    //    const unimp = tasksArray.filter(function({priority}){
    //     return priority === 2
    //    }).length;
    const impTasks = document.querySelector('.imp');
    const unimpTasks = document.querySelector('.unimp');
    const allimpTasks = document.querySelector('.allimp');
    const {imp, unimp, allimp} = tasksArray.reduce(function(acc, {priority},){
        // if(priority === 1){
        //     acc.imp++;
        // }else{
        //     acc.unimp++;
        // }
        // return acc
        acc.imp += priority === 1 ? 1 : 0
        acc.unimp += priority === 2 ? 1 : 0
        acc.allimp += priority === 1 || priority === 2 ? 1 : 0
        return acc
        
    }, {imp: 0, unimp: 0, allimp: 0});
    
        impTasks.innerText = imp;
        unimpTasks.innerText = unimp;
        allimpTasks.innerText = allimp;

    // console.log(imp + ' Важное', unimp + ' Не очень');
    }

function rerender(){
    tasks.innerText = '';
    tasksArray.forEach(function ({id, title, priority}){
        const newElement = createTask(id, title, priority);
        tasks.append(newElement);
        
    })
    localStorage.setItem('tasks', JSON.stringify(tasksArray));
    calculate();
}

rerender();



