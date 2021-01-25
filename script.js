const tasks = [
    { content: 'foo', done: true },
];
const newTask = document.querySelector('.js-taskContent');

const addNewTask = () => {
    document.querySelector('.addTaskButton').addEventListener("click", (event) => {
        event.preventDefault();
        newTask.value === '' ? "" : tasks.push({ content: newTask.value });

        newTask.value = '';
        render();
    });
};

const removeTask = () => {
    const removeTaskButtons = document.querySelectorAll('.removeTask')

    removeTaskButtons.forEach((button, index) => {

        button.addEventListener("click", () => {
            tasks.splice(index, 1);
            render();
        })
    });
};

const toggleDoneTask = () => {

    const toggleTaskButtons = document.querySelectorAll('.toggleDoneTask')

    toggleTaskButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            tasks[index].done = !tasks[index].done;
            render();
        })
    });
};

const render = () => {
    newTask.focus();
    let taskList = "";

    tasks.forEach(({ content, done }) => {
        taskList += `        
            <li>
                <div class='js-divForList'> 
                    <button class='js-button toggleDoneTask'>Done</button><div class='js-divForParagraph'> 
                        <p class="js-Task" ${done ? 'style="text-decoration: line-through"' : ''}>${content}</p>
                    </div><button class='js-button removeTask'>Remove</button>    
                </div>
            </li>   
        `
    })
    document.querySelector(".js-tasksList").innerHTML = taskList;
    removeTask();
    toggleDoneTask();
};

const init = () => {
    render();
    addNewTask();

};
init();