import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { Task, User } from './types.js';
import { Layout } from './components/Layout/layout';
import './App.css';

// массив задач
let tasks: Task[] = getTasksFromLocalStorage();
// localStorage.clear();
// получили из хранилища
function getTasksFromLocalStorage() {
  let string: string | null = localStorage.getItem("tasks");
  if (string == null) {
    return []
  } else {
  let tasks = JSON.parse(string)
    return tasks;
  };
}
// положили в хранилище
function setTasksToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// // текущая задача
 let curentTaskId: number = 0;

// управляет видимостью формы
let user: User = { name: 'Ната', }

// временно для отладки MOK
// tasks.push({
//   taskName: 'string1',
//   taskId: 1,
//   taskContent: 'string',
//   columnId: 1
// })
// tasks.push({
//   taskName: 'string2',
//   taskId: 2,
//   taskContent: 'string',
//   columnId: 2
// })
// tasks.push({
//   taskName: 'string3',
//   taskId: 3,
//   taskContent: 'string',
//   columnId: 3
// })
// tasks.push({
//   taskName: 'string4',
//   taskId: 4,
//   taskContent: 'string',
//   columnId: 4
// })


export const TasksContext = React.createContext({ tasks, user,curentTaskId, getTasksFromLocalStorage, setTasksToLocalStorage });

function App() {
  return (
    <BrowserRouter>
      <TasksContext.Provider value={{ tasks, user,curentTaskId, getTasksFromLocalStorage, setTasksToLocalStorage }}>
        <div className="App">
          <Layout />
        </div>
      </TasksContext.Provider>
    </BrowserRouter>
  );
}

export default App;


// детали задачи
// taskNameDetail: string,
//   taskIdDetail: number,
//   taskContentDetail: string,
