
import { ContentBoardColumnTask } from './ContentBoardColumnTask/contentBoardColumnTask';
import { AddCard } from './AddCard/addCard';
import "./contentBoardColumn.css";
import React, { useContext, useState } from "react";
import { TasksContext } from "../../../../App";

export interface ContentBoardColumnProps {
  columnName: string,
  columnId: number,
}

export const ContentBoardColumn = ({ columnName, columnId
}: ContentBoardColumnProps) => {
  const tasksContext = useContext(TasksContext);
  let columnTasks = tasksContext.tasks.filter(element => element.columnId === columnId);
  // const [] = useState();

  let columnTaskReactNodes = columnTasks.map(element => { return <ContentBoardColumnTask taskName={element.taskName} taskId={element.taskId} /> });
  return (
    // !-- {ContentComponentBoardColumn} -->
    <div className="layout-content-board-column">

      <div className="layout-content-board-column-name" id={'column' + columnId}>{columnName}</div>
      {columnTaskReactNodes}
      {/* {<ContentBoardColumnTask taskName={'Shop page – performance issues'} taskId={'task1'} />} 
      {<ContentBoardColumnTask taskName={'Checkout bugfix'} taskId={'task2'} />}  */}
      <AddCard columnId={columnId} />
    </div>
  );
}


