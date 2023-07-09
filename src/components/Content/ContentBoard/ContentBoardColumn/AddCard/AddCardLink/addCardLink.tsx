
import "./addCardLink.css";

export interface AddCardLinkProps {    
  handleClick: () => void,
  disabled: boolean,
  columnId: number,
}

export const AddCardLink = ({   
  handleClick,
  disabled,
  columnId,
}: AddCardLinkProps) => {
  let className = disabled? "layout-content-board-column-addcard-disabled":"layout-content-board-column-addcard";
  return (
   <div className={className} onClick={handleClick}> 
    + Add card
    </div>
    
  );
}
