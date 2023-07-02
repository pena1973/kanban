import { ReactNode } from "react";
import React, { useContext } from "react";
import { TasksContext } from "../../../../../../App";
import "./addCardLink.css";

export interface AddCardLinkProps {    

}

export const AddCardLink = ({   
}: AddCardLinkProps) => {

  const tasksContext = useContext(TasksContext);
   
  
  return (
    <div className="layout-content-board-column-addcard"> 
    + Add card
    </div>
  );
}
