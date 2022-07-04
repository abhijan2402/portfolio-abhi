import React from 'react';
import "./navbar.css";
const Navbar = () =>  {
    return (
      <>
        <div className='navbar-main'>
            <div className='navbar-portfolio'>PortFolio</div>
            <div className='navbar-list'>
                <ul className='navbar-ul'>
                    <li className='navbar-li'>Home</li>
                    <li className='navbar-li'>About</li>
                    <li className='navbar-li'>Services</li>
                    <li className='navbar-li'>Footer</li>
        
                </ul>
            </div>
        </div>
      </>
    );
  }
  
  export default Navbar;
  