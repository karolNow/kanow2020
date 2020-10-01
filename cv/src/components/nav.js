import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

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
       cursor:pointer;
       &:hover{
        text-decoration:underline;
        cursor: pointer;
       }
     }
    }
  }
`;


const Nav = ({ siteTitle }) => (
  <NavInner className="Nav no-print" id="Nav">
    <ul>
      <li>          
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
      </li>
      <li>          
        <p onClick={() =>{window.print()}}>Print</p>
      </li>
      <li className='back'>          
        <Link to="/">Main Page</Link>
      </li>
      <li className='back'>          
        <Link to="/web">Web portfolio</Link>
      </li>
      <li className='back'>          
        <Link to="/projects">Projects</Link>
      </li>
    </ul>
  </NavInner>
)

export default Nav
