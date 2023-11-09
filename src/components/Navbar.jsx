import React from 'react'
import { useNavigate } from 'react-router-dom';



function Navbar() {
    const navigate = useNavigate();
  return (
    <>
    <div className="navcont" style={{backgroundColor: '#152A46',color:'white',display:'flex', fontSize:'18px',justifyContent:"space-between", padding:'15px', alignItems:"center"}}>
            <div style={{display:'flex', gap:'40px', alignItems:"center",}}>
            <img style={{width:'200px', marginLeft:'50px'}} src="src\assets\logo.png" alt="" />
            <div style={{cursor:"pointer"}}  onClick={() => navigate("/")}>Home</div>
            <div style={{cursor:"pointer"}} onClick={() => navigate("/")} >Our Product</div>
            <div style={{cursor:"pointer"}}> About Us</div>
            </div>
            <div className="cart" onClick={() => navigate("/checkout")} style={{marginRight:'40px', cursor:"pointer", backgroundColor: 'white', color:'#152A46', display:'flex', fontWeight:'bold', padding:'5px 40px 5px 40px', borderRadius:'15px'}}>
             Cart
            </div>
          </div>
    
    </>
  )
}

export default Navbar