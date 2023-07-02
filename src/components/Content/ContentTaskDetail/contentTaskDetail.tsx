
import "./contentTaskDetail.css";
import { useContext } from "react";
import { TasksContext } from "../../../App";
import {Task} from "../../../types"
import crost  from './images/crost.svg'
import { Link } from "react-router-dom";

export interface ContentTaskDetailProps {  
}

export const ContentTaskDetail = ({   
 }: ContentTaskDetailProps) => {
  const tasksContext = useContext(TasksContext);
  
  let curentTask:Task|undefined = undefined;

  if (tasksContext.curentTaskId !== 0) 
  {curentTask = tasksContext.tasks.find(element => element.taskId === tasksContext.curentTaskId)} 
  // curentTask получили из контекста -  дальше выводим детали в форму
  const onClick=()=>{
    // Здесь еще записать в контекст
    <Link to={"/"}></Link>
  }
  return (
    <div className="layout-content-task-detail">
      <div className="layout-content-task-detail-title-groupe">       
        <div className="layout-content-task-detail-title">{curentTask?.taskName}</div>
        <img className="layout-content-task-detail-crost" src={crost} alt="crost" onClick={onClick}></img>
      </div>
      <textarea className="layout-content-task-detail-text">{curentTask?.taskContent}      
      </textarea>
    </div>
    )
  }
