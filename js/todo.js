const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

const TODOS_KEY = 'todos';

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    // 한 번 더 setItem으로 저장해주기
}

function paintToDo(newToDo) {
    const li = document.createElement('li');
    li.id = newToDo.id;
    const span = document.createElement('span');
    span.innerText = newToDo.text;
    const button = document.createElement('button');
    button.innerText = '❌';
    button.addEventListener('click', deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = '';
    const newtoDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newtoDoObj);
    paintToDo(newtoDoObj);
    saveToDos();
}
toDoForm.addEventListener('submit', handleToDoSubmit);

// function sayHello(item) {
//     console.log(`this is the turn off ${item}`);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

 

/**
 * 어레이가 빈값으로 시작하기 떄문에
 * 새로고침시 다시 비어있는 어레이로 돌아감
 * (let)toDos = parsedToDo를 정의함으로써
 * 기존에 어레이를 저장하고 새로 덮어씌워지지 않고
 * 기존에 저장되있던 항목을 그대로 가져와서 함수 실행
 */