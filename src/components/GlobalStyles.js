import {styled, createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6{
    font-family: 'DM Serif Display', serif;
  }

  @keyframes starmove {
    from {
      background-position-x: 5%;
    }
    to { 
      background-position-x: 1300%;
    }
  }

  a {
      cursor:cell;
      color:black;
      text-decoration:underline;
      &:hover{
        text-decoration:underline;
      }
      &:visited{
        color: #3c3b3b;
      }
      &:focus{
        color: #3c3b3b;
      }
    }

  .aftr {
      display:inline;
      border-radius:50%;
      width:30px;
      height:30px;
      text-align:center;
      vertical-align: middle;
      padding:1px;
      background-color:black;
      cursor:cell;
      color:white;
      text-decoration:none;
      &:hover{
        text-decoration:underline;
      }
      &:visited{
        color: #3c3b3b;
      }
      &:focus{
        color: #3c3b3b;
      }
    }

    .a-button {
      cursor:cell;
      color:black;
      background-color: transparent;
      text-decoration:none;
      border:solid 1px black;
      padding: 5px 10px;
      &:visited{
        color: #3c3b3b;
      }
      &:focus{
        color: #3c3b3b;
      }
      &:hover{
        color: white;
        background-color: black;
        text-decoration: none;
      }
    }
`

export default GlobalStyle;