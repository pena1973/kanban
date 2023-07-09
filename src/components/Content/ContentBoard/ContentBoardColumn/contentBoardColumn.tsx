
import { AddCard } from './AddCard/addCard';
import "./contentBoardColumn.css";
import  { useContext } from "react";
import { TasksContext } from "../../../../App";
import { Link } from 'react-router-dom';

export interface ContentBoardColumnProps {
  columnName: string,
  columnId: number,
  renderColumn: () => void,
  calcNumber: number; 
}

export const ContentBoardColumn = ({ 
  columnName, 
  columnId,
  renderColumn,
  calcNumber,
}: ContentBoardColumnProps) => {
 
  const tasksContext = useContext(TasksContext);  
  let columnTasks =tasksContext.tasks.filter(element => element.columnId === columnId);
  
  // вычисляю количество задач предыдущей колонки чтобы замютить кнопку + кард  кроме 1 колонки
  let columnTasksPrevious =tasksContext.tasks.filter(element => element.columnId === columnId-1);
  let disabled = ((columnTasksPrevious.length ===0) && columnId>1);

  let columnTaskReactNodes = columnTasks.map(element => (
    <Link
      to={`/tasks/${element.taskId}`}
      key={element.taskId} className='layout-content-board-column-task'>
      <div className="layout-content-board-column-task" > {element.taskName} </div>
    </Link>
  )
  );

  return (
    <div className="layout-content-board-column">
      <div className="layout-content-board-column-name" id={'column' + columnId}>{columnName}</div>
      {columnTaskReactNodes}      
      <AddCard columnId={columnId} renderColumn={renderColumn} disabled ={disabled}  />
    </div>
  );
}


