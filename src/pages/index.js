import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Back = styled.div`
  position: relative;
	animation-name: starmove;
	animation-duration: 400s;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
  width: 100%;
  min-height: 92vh;
  background-image: linear-gradient(90deg,black 25%, white 55%, black 100% );
  background-size: 10px 10px;
  z-index:0;
`

const Cont = styled.div`
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:1;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  a{
    margin:1em;
    border-radius:50%;
    font-family: 'DM Serif Display';
    color: white;
    text-decoration:none;
    text-transform:uppercase;
    font-size:1.35em;
    &:hover{
      color: black !important;
      text-decoration:none;
      section{
        cursor:pointer;
        background: radial-gradient(white 60%, transparent 70%,transparent 100%);
        box-shadow: none;
        border-radius: 50%;
      }
    }
    &:visited{
      color: white;
    }
    &:focus{
      color:white;
    }
  }
}
`

const Circle = styled.section`
 z-index:2;
 display:flex;
 justify-content:center;
 align-items: center;
 align-content:center;
 text-align:center;
 min-width:170px;
 min-height:170px;
 max-width:400px;
 max-height:400px;
 width:25vw;
 height:25vw;
 background: radial-gradient(black 60%, transparent 70%, transparent 100%);
 border: solid 1px transparent;
 border-radius: 100%;
 text-tranform:uppercase;
 padding:3px;
 &:hover{
   box-shadow: none;
 }
`
const But = styled.button`
  border:solid 3px black;
  border-radius: 0;
  position:relative;
  display:inline-block;
  min-width:100px;
  min-height:2em; 
  transform: skew(-20deg);
 
  a{
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin:auto;
    z-index:999;
    color:black;
    transform: skew(5deg);
    text-decoration:none;
  }


  &:hover{
    transition: all 0.25s ease-in-out;
    background:black;
    &::before{
      transition: all 0.25s ease-in-out;
      z-index:0;
      content: ' ';
      position:absolute;
      top:0;
      left:0;
      border-radius: 0 10px 0 10px !important;
      width:100%;
      height:100%;
      background:white;
    }
  }
`

const hendleModal = ()=>{
 alert('dupabiskupa')
}

const IndexPage = () => (
  <Layout>
    <SEO title="Main | Karol Nowak" />
    <Back></Back>
    <Cont>
      {/* <a><Circle onClick={hendleModal}>Tangible<br/> Projects</Circle></a> */}
      <Link to="/projects"><Circle>Tangible<br/> Projects</Circle></Link>
      <Link to="/web"><Circle>Digital<br/> Projects</Circle></Link>
    </Cont>
  </Layout>
)

export default IndexPage
