let todoarr = [];
let output = document.querySelector('.innerline');
let butt = document.querySelector('.btn');

window.onload = function() {
    let val = JSON.parse(localStorage.getItem('TODO')) || [];
    todoarr = val;
    val.forEach(element => {
        todolist(element);
    });
};

butt.addEventListener('click', () => {
    let input = document.querySelector('.input');
    if (input.value.trim() === "") return;

    todoarr.push(input.value);
    localStorage.setItem('TODO', JSON.stringify(todoarr));
    todolist(input.value);
    input.value = '';
});

function todolist(todo) {
    let para = document.createElement('p');
    para.classList.add('out');
    para.innerText = todo;
    output.appendChild(para);

    // single click = mark done + remove from array
    para.addEventListener('click', () => {
        para.style.textDecoration = "line-through";
        para.style.textDecorationColor = 'red';

        let index = todoarr.indexOf(todo);
        if (index > -1) {
            todoarr.splice(index, 1);
            localStorage.setItem('TODO', JSON.stringify(todoarr));
        }
    });

    // double click = remove from UI only
    para.addEventListener('dblclick', () => {
        output.removeChild(para);
    });
}
