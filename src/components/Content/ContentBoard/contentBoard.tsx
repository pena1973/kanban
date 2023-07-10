import { ContentBoardColumn } from './ContentBoardColumn/contentBoardColumn';
import { useContext, useState } from "react";
import { TasksContext } from "../../../App";
import "./contentBoard.css";

export interface ContentBoardProps {

}

export const ContentBoard = ({
}: ContentBoardProps) => {
  const tasksContext = useContext(TasksContext);  
  
  // calcControl() - достаточно искуственная конструкция чтобы обеспечить рендеринг соседней колонки
  // при перетаскивании задачи меняется ИД колонки которое является атрибутом задачи.
  // поскольку при изменении не меняется ссылка на массив и состав массива задач, JS не видит изменения,
  // но при смене места задачи гарантированно изменится сумма id всех колонок  соответственно
  // calcNumber -  сумма ид всех задач всех колонок  -  пинок для Usestate к прорисовке
  
  function calcControl() {
    let num = 0; 
   for (let index = 0; index <tasksContext.tasks.length; index++) {    
      num = num + tasksContext.tasks[index].columnId;        
    }
    return num 
  } 
  // контрольное число 
  const [calcNumber,setcalcNumber] = useState(calcControl());
  
  // todo управление рендерингом колонок
  const renderColumn=()=>{
    setcalcNumber(calcControl());
  }
  return (
    // четыре колонки
    <div className="layout-content-board">
      {<ContentBoardColumn columnName={'Backlog'}     columnId={1} renderColumn={() => renderColumn()} calcNumber={calcNumber} />}
      {<ContentBoardColumn columnName={'Ready'}       columnId={2} renderColumn={() => renderColumn()} calcNumber={calcNumber} />}
      {<ContentBoardColumn columnName={'In Progress'} columnId={3} renderColumn={() => renderColumn()} calcNumber={calcNumber} />}
      {<ContentBoardColumn columnName={'Finished'}    columnId={4} renderColumn={() => renderColumn()} calcNumber={calcNumber} />}
    </div>
  );
}
