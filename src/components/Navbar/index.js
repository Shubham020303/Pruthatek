import React from 'react'

//Styles
import { Wrapper, Navlink, Image, SidebarContainer } from './Navbar.styles';

//Images
import logo from '../../images/logo.png';

const Navbar = () => {

     const handleClose = () => {
          document.getElementById("sidebar").style.left = "-600%";
     }

     const handleOpen = () => {
          document.getElementById("sidebar").style.left = "0%";
     }

     return (
          <Wrapper>

               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='open' width="30px" height="30px" onClick={handleOpen}>
                    <path d="M2 11H22V13H2zM2 5H22V7H2zM2 17H22V19H2z" />
               </svg>

               <div>
                    <Image src={logo} />
               </div>
               <Navlink>
                    <ul>
                         <li>Company</li>
                         <li>Expertise</li>
                         <li>Services</li>
                         <li>Clients</li>
                         <li>Portfolio</li>
                         <li>Career</li>
                         <li>Blog</li>
                         <li>Contact Us</li>
                    </ul>
               </Navlink>
               <SidebarContainer id='sidebar'>
                    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" className='close' viewBox="0 0 50 50" width="30px" height="30px" onClick={handleClose}>
                         <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
                    </svg>
                    <ul>
                         <li onClick={handleClose}>Company</li>
                         <li onClick={handleClose}>Expertise</li>
                         <li onClick={handleClose}>Services</li>
                         <li onClick={handleClose}>Clients</li>
                         <li onClick={handleClose}>Portfolio</li>
                         <li onClick={handleClose}>Career</li>
                         <li onClick={handleClose}>Blog</li>
                         <li onClick={handleClose}>Contact Us</li>
                    </ul>
               </SidebarContainer>
          </Wrapper>
     )
}

export default Navbar