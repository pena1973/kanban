import { ReactNode } from "react";
import { ProfileButton } from "../ProfileButton/profileButton"
import "./header.css";

export interface HeaderProps {
}

export const Header = ({
}: HeaderProps) => {
  return (
    <div className="header">
      <h1 className="header-h1">Awesome Kanban Board</h1>
      <ProfileButton />
    </div>
  );
}
