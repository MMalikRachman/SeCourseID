import { Button, Col, Row } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Layout = () => {
  
  return (
    <div style={{width: '100%', backgroundColor:'#EFF4FA', margin:'0', padding:'0'}}>  
      <Navbar/>
      <Outlet/>
      <Footer/>
      </div>
  );
};

export default Layout;
