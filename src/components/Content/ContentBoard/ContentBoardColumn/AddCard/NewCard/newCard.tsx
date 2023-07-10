import { useState } from "react";
import "./newCard.css";

export interface NewCardProps {
  onSubmit: (taskName: string) => void;
  onCancel: () => void;  
}

export const NewCard = (
  {onSubmit,  onCancel} : NewCardProps) => {
  const [taskName, settaskName] = useState('');
  
  return (
    <div id="newcard">
      <textarea data-testid="inputName" 
        className="layout-content-board-column-input"
        maxLength={50}
        value={taskName}
        onChange={e => { settaskName(e.target.value) }
      }
      />

      <div className="layout-content-board-column-button-groupe">
        <button data-testid="onSubmit" className="layout-content-board-column-button-blue" onClick={() => onSubmit(taskName)}> Submit</button>
        &nbsp;&nbsp;
        <button data-testid="onCancel" className="layout-content-board-column-button-white" onClick={onCancel}> Cancel</button>
      </div>
    </div>
  );
}
