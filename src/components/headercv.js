import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Glowa = styled.section`
  margin-top:50px;
  .links{
    a{
      color:black;
      text-decoration:none;
      &:hover{
        text-decoration:underline;
      }
    }
  }
`


const CvHeader = ({ siteTitle }) => (
    <Glowa>
      <h1>Karol Nowak<br/>CURRICULUM VITAE </h1>
      <div className="links">
        <a href="http://www.kanow.pl" target="_blank">www.kanow.pl</a><br/>
        <a href="mailto:hello@kanow.pl">hello@kanow.pl</a><br/>
        <a href="tel:508592222">508592222</a><br/>
        <p>Erazma Ciołka<br/>01-433 Warszawa</p>
      </div>
    </Glowa>
)

export default CvHeader
