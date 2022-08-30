import React from 'react'

//Styles
import { Image, Wrapper } from './Connect.styles'

//Images
import twitter from '../../images/twitter.png';
import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';
import youtube from '../../images/youtube.png';
import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';
import pinterest from '../../images/pinterest.png';
import tinder from '../../images/tinder.png';
import connect from '../../images/connect.png';

const Connect = () => {

     const handleConnectivity = () => {
          document.getElementById("twitter").style.top = "10%";
          document.getElementById("facebook").style.left = "30%";
          document.getElementById("instagram").style.right = "30%";
          document.getElementById("youtube").style.bottom = "10%";
          
          document.getElementById("github").style.right = "35%";
          document.getElementById("github").style.top = "20%";
          document.getElementById("linkedin").style.bottom = "20%";
          document.getElementById("linkedin").style.right = "35%";
          document.getElementById("pinterest").style.left = "35%";
          document.getElementById("pinterest").style.bottom = "20%";
          document.getElementById("tinder").style.top = "20%";
          document.getElementById("tinder").style.left = "35%";
     }

     const handleCloseConnectivity = () => {
          document.getElementById("twitter").style.top = "";
          document.getElementById("facebook").style.left = "";
          document.getElementById("instagram").style.right = "";
          document.getElementById("youtube").style.bottom = "";
          
          document.getElementById("github").style.right = "";
          document.getElementById("github").style.top = "";
          document.getElementById("linkedin").style.bottom = "";
          document.getElementById("linkedin").style.right = "";
          document.getElementById("pinterest").style.left = "";
          document.getElementById("pinterest").style.bottom = "";
          document.getElementById("tinder").style.top = "";
          document.getElementById("tinder").style.left = "";
     }

     const customFunction = () => {
          if (document.getElementById("twitter").style.top === "") {
               handleConnectivity()
          }
          else{
               handleCloseConnectivity()
          }
     }

     return (
          <Wrapper>
               <Image src={twitter} id='twitter' />
               <Image src={facebook} id='facebook' />
               <Image src={instagram} id='instagram' />
               <Image src={youtube} id='youtube' />
               <Image src={github} id='github' />
               <Image src={linkedin} id='linkedin' />
               <Image src={pinterest} id='pinterest' />
               <Image src={tinder} id='tinder' />
               <Image src={connect} className="connect" onClick={customFunction} />
          </Wrapper>
     )
}

export default Connect