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
      width:32px;
      height:32px;
      border-radius:50%;
      border:solid 1px black;
      text-align:center;
      vertical-align: middle;
      padding:1px;
      background-color:white;
      cursor:cell;
      color:black;
      text-decoration:none;
      &:hover{
        text-decoration:none;
        background-color:black;
        color:white;
      }
      &:visited{
        color:black;
        background-color:grey;
        border:solid 1px grey;
      }
      &:focus{
        color:black;
        background-color:grey;
        border:solid 1px grey;
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