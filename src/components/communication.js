import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'

const Lang = styled.section`
  h3,p{
    display: inline-block;
  }
`

const Communication = ({ siteTitle }) => (
  <Lang>
      <h1>Languages</h1>
      <hr/>
      <div>
        <h3>Polish</h3><p>- primary language</p>
      </div>  
      <div>
        <h3>English</h3><p>- B2/C1</p>
      </div>
  </Lang>
)

export default Communication
