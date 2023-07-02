import { ReactNode, useState } from "react";
import { AddCardLink } from './AddCardLink/addCardLink';
import { NewCard } from './NewCard/newCard';
import { SelectCard } from './SelectCard/selectCard';

import "./addCard.css";

export interface AddCardProps {
  columnId: number,
}

export const AddCard = ({ columnId
}: AddCardProps) => {
  // могут быть AddCardLink/NewCard/SelectCard -  в зависимости от состояния компонента
  const [stateAddCard, setStateAddCard] = useState('AddCardLink');
  
  return (
    <div >      
      {stateAddCard ==='AddCardLink' && <AddCardLink /> }      
      {stateAddCard ==='NewCard' && <NewCard />}
      {stateAddCard ==='SelectCard' && <SelectCard columnId={columnId} />}
    </div>
  );
}
