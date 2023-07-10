 
import { useContext, useState } from "react";
import { AddCardLink } from './AddCardLink/addCardLink';
import { NewCard } from './NewCard/newCard';
import { SelectCard } from './SelectCard/selectCard';
import { TasksContext } from "../../../../../App";

import "./addCard.css";

export interface AddCardProps {
  columnId: number,
  renderColumn: () => void,
  disabled : boolean,
}

export const AddCard = ({
  columnId, 
  renderColumn, 
  disabled 
}: AddCardProps) => {
  // могут быть AddCardLink/NewCard/SelectCard -  в зависимости от состояния компонента
  const [stateAddCard, setStateAddCard] = useState('AddCardLink');
  const tasksContext = useContext(TasksContext);
  // let columnTasks = tasksContext.tasks.filter(element => element.columnId === columnId);
  // Управление видимостью  частей компонента при нажании AddCard
  const handleClick = () => {        
    if (disabled) return

    if (columnId === 1)
      setStateAddCard('NewCard');
    else
      setStateAddCard('SelectCard');
  }
  const onSubmit = (taskName: string) => {
    // добавим если название не пустое
    if (taskName!=="") {

    // обрабатываем добавление в общий масив
    tasksContext.tasks.push({
      taskName: taskName,
      taskId: tasksContext.tasks.length + 1,
      taskContent: 'Необходимо сделать следующее: ',
      columnId: columnId,
    })
    // Записали в хранилище
    tasksContext.setTasksToLocalStorage();
  }

    // перерисуем  колонку
    renderColumn();
    setStateAddCard('AddCardLink');
  }
  
  const onCancel = () => {    
    setStateAddCard('AddCardLink');    
  }
  const onSelect = (taskId : number) =>
  {    
    let task = tasksContext.tasks.find(element => element.taskId === taskId);
    if (!task) return
    task.columnId += 1;    
    
    // Записали в хранилище
    tasksContext.setTasksToLocalStorage();
    // перерисовали
    renderColumn();
    setStateAddCard('AddCardLink');    
  }
  return (
    <div >
      {stateAddCard === 'AddCardLink' && <AddCardLink handleClick={handleClick} disabled = {disabled} columnId = {columnId}/>}
      {stateAddCard === 'NewCard' && <NewCard onSubmit={onSubmit} onCancel={onCancel} />}
      {stateAddCard === 'SelectCard' && <SelectCard columnId={columnId}  onSelect={onSelect} onCancel={onCancel} tasks={tasksContext.tasks}/>}
    </div>
  );
}