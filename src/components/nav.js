import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import {Media} from "../media/media"

const NavInner = styled.header`
    margin:auto;

  ul{
    position:fixed;
    top: 50px;
    left: 50px;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0;
    .back{
       background-color: black;
       text-align: center;
       a{
       color: white;
       }
     }
    li:not(.back){
     padding-left:1em;
    }
    li{
     font-family: 'Open Sans', 'sans-serif';
     list-style: none;
     a,p{
       cursor:cell;
     }
    }
  }

    ${Media.cv`
          ul{
      position:fixed;
      top:0;
      left: 0;
      right:0;
      padding:10px;
      margin:0 auto;
      display: flex;
      flex-direction: row;
      flex-wrap:wrap;
      align-items: center;
      justify-content: space-evenly;
      background-color: white;
      }
    `}

    ${Media.sm`
          ul{
      position:fixed;
      padding:55px 0;
      top:auto;
      bottom:0;
      left:0;
      right:0;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      background-color: white;
      }
    `}
`;


const Nav = ({ siteTitle }) => (
  <NavInner className="Nav no-print" id="Nav">
    <ul>
      {/* <li>          
        <a>Experience</a>
      </li>
      <li>          
        <a>Skills</a>
      </li>
      <li>          
        <a>Education</a>
      </li>
      <li>          
        <a>Communication</a>
      </li> */}
      <li>          
        <p className='a-button' onClick={() =>{window.print()}}>Print</p>
      </li>
      <li>          
        <Link className='gb-button' to="/">Main Page</Link>
      </li>
      <li>          
        <Link className='gb-button' to="/web">Digital projects</Link>
      </li>
      <li>          
        <Link className='gb-button' to="/projects">Tangible Projects</Link>
      </li>
    </ul>
  </NavInner>
)

export default Nav
