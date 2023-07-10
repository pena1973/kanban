// import { ReactNode } from "react";
import { useContext } from "react";
import { TasksContext } from "../../App";
import './footer.css'
export interface FooterProps {    
}

export const Footer = ({   
}: FooterProps) => {
  const tasksContext = useContext(TasksContext);
  let activeTasks =  tasksContext.tasks.filter(element => element.columnId!== 4).length;
  let finishedTasks =  tasksContext.tasks.filter(element => element.columnId=== 4).length;
  let userName = tasksContext.user.name;
  let curentYear = new Date().getFullYear();
  return (
    <div className="footer">
    <div className="footer-groupe">
        <h1 className="footer-h1">Active tasks: {activeTasks}</h1>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <h1 className="footer-h1">Finished tasks: {finishedTasks}</h1>
    </div>
    <h1 className="footer-h1">Kanban board by {userName}, {curentYear}</h1>
</div>
  );
}
