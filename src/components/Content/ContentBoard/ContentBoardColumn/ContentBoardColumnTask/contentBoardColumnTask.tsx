
import { useContext } from "react";
import { TasksContext } from "../../../../../App";
import { Link } from "react-router-dom";
import "./contentBoardColumnTask.css";

export interface ContentBoardColumnTaskProps {    
  taskName: string;
  taskId: number;
}

export const ContentBoardColumnTask = ({ 
  taskName,
  taskId  
}: ContentBoardColumnTaskProps) => {
  const tasksContext = useContext(TasksContext);
  const onClick  = () =>{   
    // Записали текущую задачу в контекст
    // и преводим страницу роутером 
    tasksContext.curentTaskId = taskId;
    <Link to={"/task/"+taskId}></Link>
  }
  
  return (
    <div className="layout-content-board-column-task" onClick={onClick}>
      {taskName}
      </div>
  );
}
