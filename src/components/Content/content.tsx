import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { ContentBoard } from './ContentBoard/contentBoard';
import { ContentTaskDetail } from './ContentTaskDetail/contentTaskDetail';
import './content.css';
// import React, { useContext } from "react";
// import { TasksContext } from "../../App";

export interface ContentProps {
}

export const Content = ({
}: ContentProps) => {
 
  return (
    <div className="layout-content">
      <Routes>        
        <Route path='/' element={<ContentBoard />} />
        <Route path={'/tasks/:taskId'} element={<ContentTaskDetail />}/> 
        {/* <Route path='*' element={<NotFound/>}/> */}        
      </Routes>
    </div>
  );
}

