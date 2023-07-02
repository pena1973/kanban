import { ContentBoardColumn } from './ContentBoardColumn/contentBoardColumn';
import "./contentBoard.css";

export interface ContentBoardProps {
}

export const ContentBoard = ({
}: ContentBoardProps) => {
  return (
    // четыре колонки
    <div className="layout-content-board">
      {<ContentBoardColumn columnName={'Backlog'}     columnId={1} />}
      {<ContentBoardColumn columnName={'Ready'}       columnId={2} />}
      {<ContentBoardColumn columnName={'In Progress'} columnId={3} />}
      {<ContentBoardColumn columnName={'Finished'}    columnId={4} />}
    </div>
  );
}
