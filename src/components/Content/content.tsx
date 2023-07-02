import { ReactNode } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { ContentBoard } from './ContentBoard/contentBoard';
import { ContentTaskDetail } from './ContentTaskDetail/contentTaskDetail';
import './content.css';
import React, { useContext } from "react";
import { TasksContext } from "../../App";

export interface ContentProps {
}

export const Content = ({
}: ContentProps) => {
 const tasksContext = useContext(TasksContext);
 const { pathname } = useLocation();

  return (
    <div className="layout-content">
      <Routes>
        {/*  передаю в контексте curentForm -  нужно показывать  - текущкю форму */}
        {/* Детали задачи тоже через контекст в поле curentTaskId  -  это дальше сделать*/}
        
        <Route path='/' element={<ContentBoard />} />
        <Route path='/task/:number' element={<ContentTaskDetail />} /> 
        {/* <Route path='/' element={<ContentTaskDetail />} /> */}
        
        
        {/* <Route path='*' element={<NotFound/>}/> */}        
        {/* {tasksContext.curentForm ==='Board' && <ContentBoard />}               
             
             {(tasksContext.curentForm === 'Detail') &&  <ContentTaskDetail  
             taskNameDetail={'Main page – performance issues '} 
             taskIdDetail={1} 
             taskContentDetail = {'Это был темный лес, издали казавшийся непроходимым.'
             +'Там Пахапиль охотился, глушил рыбу,'
             +'спал на еловых ветках. Короче – жил,'
             +'пока русские не выгнали оккупантов. А когда немцы ушли,'
             +'Пахапиль вернулся. Он появился в Раквере, где советский'
             +'капитан наградил его медалью. Медаль была украшена четырьмя'
             +'непонятными словами, фигурой и восклицательным знаком.'}            
             />}  
 */}
      </Routes>
    </div>
  );
}

