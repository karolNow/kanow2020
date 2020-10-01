import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'

const Edu = styled.section `
  .school{
    margin:1.3em 0;
    h2,
    p{
      margin-bottom:0.4em;
    }
  }
`

const Education = ({ siteTitle }) => (
  <Edu>
    <h1>Education</h1>
    <hr/>
    <div className="school">
      <h2>Creative Coding 2016-2017</h2>
      <p>POSTGRADUATE STUDIES</p>
      <p>School of Form on SWPS Warsaw</p>
    </div>
    <div className="school">
      <h2>Landscape Architecture 2011-2016</h2>
      <p>ENGEENER & MASTER DEGREE</p>
      <p>SGGW Warsaw</p>
    </div>
  </Edu>
)

export default Education
