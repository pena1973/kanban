import { useState } from "react";
import useravatar  from './images/user-avatar.svg';
import arrowdown  from './images/arrow-down.svg';
import arrowup  from './images/arrow-up.svg';
import rectangle  from './images/rectangle.svg';
import "./profileButton.css";

export interface profileButtonProps {
}

export const ProfileButton = ({
}: profileButtonProps) => {
  const [buttonState, setButtonState] = useState(false); // состояние кнопки нажата(выпало меню)/отпушена
  const onClick  = () =>{setButtonState(!buttonState)}
  return (
    <div className="profile-button" onClick={onClick}>
      <img className="profile-avatar" src= {useravatar} alt="avatar"></img>
      {buttonState && <img className="profile-arrow" src= {arrowdown} alt="arrow"></img>}
      {!buttonState && <img className="profile-arrow" src= {arrowup} alt="arrow"></img>}
      {buttonState && <img className="profile-rectangle" src={rectangle} alt="rectangle"></img>}
      {buttonState && 
      <ul className="dropdown-menu">
        <li className="dropdown-menu-item"> Profile</li>
        <li className="dropdown-menu-item"> Log out</li>
      </ul>}
    </div>
  );
}
