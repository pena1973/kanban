
import "./contentTaskDetail.css";
import { useContext, useEffect, useState } from "react";
import { TasksContext } from "../../../App";
import { Task } from "../../../types"
import crost from './images/crost.svg'
import { Link, useParams } from "react-router-dom";

export interface ContentTaskDetailProps {

}

export const ContentTaskDetail = ({
}: ContentTaskDetailProps) => {
  const tasksContext = useContext(TasksContext);
  const params = useParams();
  const taskId: number = Number(params.taskId);
  // taskId получили из адреса, ищем в массиве который в контексте
  // получаем curentTask получили из адреса, дальше выводим детали в форму 
  let curentTask: Task | undefined = tasksContext.tasks.find(element => element.taskId === taskId);
  // для работы текст эрия 
  const [taskContent, settaskContent] = useState(curentTask?.taskContent);
  const [taskName, settaskName] = useState(curentTask?.taskName);

  // прописываем изменения редактирования в массив
  useEffect(() => {
    if (curentTask === undefined) return;
    curentTask.taskContent = taskContent === undefined ? curentTask.taskContent : taskContent;
    curentTask.taskName = taskName === undefined ? curentTask.taskName : taskName;
  }, [taskContent, taskName]);

  // при нажатии на крест надо записать измененое в контекст
  return (
    <div className="layout-content-task-detail">
      <div className="layout-content-task-detail-title-groupe">
        <textarea className="layout-content-task-detail-title"
          maxLength={50}
          value={taskName}
          onChange={e => { settaskName(e.target.value) }}
        />

        <Link
          to={`/`}
          className="layout-content-task-detail-crost">
          <img className="layout-content-task-detail-crost" src={crost} alt="crost"></img>
        </Link>
      </div>

      <textarea className="layout-content-task-detail-text"
        value={taskContent}
        onChange={e => { settaskContent(e.target.value) }}
      />

    </div>
  )
}
