let myArray = [
    // {
    // name:'play games',
    // dueDate:'14-01-2025' //index 1
    // }
];

function renderTodoList() 
{
   
    let todoListHTML = '';
    for (let i=0; i<myArray.length; i++)
    {
        const todoobject = myArray[i];
        const name = todoobject.name;
        const dueDate = todoobject.dueDate;
        const html = `                  
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="css-delete-btn" onclick='
        myArray.splice(${i},1);
        renderTodoList();
        '>Delete</button>                
        `; // the html code
        console.log(html)
        todoListHTML = todoListHTML + html;
    }
    

    document.querySelector('.todoListHTML').innerHTML = `${todoListHTML}`;
   
}


function todoList() 
{
    const inputval = document.querySelector('.input');
    const name = inputval.value;//todo getting stored in this like 'make coffee'

    const dueDateElement = document.querySelector('.js-due-date')
    const dueDate = dueDateElement.value;

    myArray.push({
        name:name,
        dueDate:dueDate,
    })
    inputval.value = '';

    renderTodoList()

}

function enter() {
    if (event.key === 'Enter')
    {
        todoList();   
    }
}
