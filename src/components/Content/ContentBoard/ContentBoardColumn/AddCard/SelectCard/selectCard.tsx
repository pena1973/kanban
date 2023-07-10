// React.SyntheticEvent<HTMLSelectElement> - мне для использования потом

import { useState } from "react";
import arrowdown from './images/arrow-down.svg';
import arrowup from './images/arrow-up.svg';
import "./selectCard.css";
import { Task } from "../../../../../../types";

export interface SelectCardProps {
  columnId: number
  onSelect: (taskId: number) => void;
  onCancel: () => void;
  tasks: Task[];
}

export const SelectCard = ({ columnId, onSelect, onCancel, tasks
}: SelectCardProps) => {
  const [buttonState, setButtonState] = useState(false); // состояние кнопки нажата(выпало меню)/отпушена
  const [taskName, settaskName] = useState('');

  const onClick = () => {
    setButtonState(!buttonState);
    // console.log(buttonState)
  }
  let selectTasks = tasks.filter(element => element.columnId === (columnId - 1));
  // const [selectTasks, setcolumnTasks] = useState(tasks.filter(element => element.columnId === (columnId - 1)));

  let selectTaskReactNodes = selectTasks.map(element => (
    <div className="layout-content-board-column-option" key={element.taskId} onClick={() => onSelect(element.taskId)}>{element.taskName}</div> )
  );

  return (
    <div>
      <div className="layout-content-board-column-select-groupe" onClick={onClick}>
        <textarea className="layout-content-board-column-select"
          placeholder="new card title"
          maxLength={50}
          value={taskName}
          onChange={e => { settaskName(e.target.value) }}
        ></textarea>
        {buttonState && <img className="layout-content-board-column-arrow" src={arrowdown} alt="arrow"></img>}
        {!buttonState && <img className="layout-content-board-column-arrow" src={arrowup} alt="arrow"></img>}
      </div>

      {buttonState && <div className="layout-content-board-column-list" >
        {selectTaskReactNodes}
        <div className="layout-content-board-column-option" onClick={onCancel}>Отмена</div>
      </div>}
    </div>

  );
}
