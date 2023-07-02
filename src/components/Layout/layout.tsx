import {Header} from '../Header/header';
import {Footer} from '../Footer/footer';
import {Content} from '../Content/content';
import "./layout.css";


export interface LayoutProps {  
}

export const Layout = ({

}: LayoutProps) => {
  return (
    <div className="layout">
      <Header/>          
      <Content/>
      <Footer/>
    </div>
  );
}
