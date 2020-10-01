import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'

const Exp = styled.section`
  .firma{
    margin-bottom: 50px;

    h2{
      line-height:1.3em;
    }

    h2,h3{
      margin: 0;
    }

    ul{
      margin-top:1em;
    }
  }
`

const Experience = ({ siteTitle }) => (
  <Exp id="Experience">
    <h1><span>Experience</span></h1>
    <hr />
    <div className="firma f-name">
        <h3>2018 – acctual</h3>
        <h2>WEB Designer/Front-end <br/>in: Agencja Gordo</h2>
        <ul>
            <li>Architecture and UX design of web aplications.</li>
            <li>Maintenance and administration of agency clients websites.</li>
            <li>Wordpress theme development, CMS architecture ajustments and content administration.</li>
            <li>Third parties solutions implemrntation and support - Google Analitics, Hotjar, Pixel etc.</li>
            <li>User testing</li>
            <li>CMS systems usage training</li>
        </ul>
    </div>
    <div className="firma f-name">
        <h3>2019 – acctual</h3>
        <h2>Creative Coding - Academic assistant<br/>in: School of Form (SWPS University)</h2>
        <ul>
          <li>Assistance in teaching students</li>
          <li>Administration and Teaching 3d printing, laser cutting, and other use of workshop devices</li>
          <li>Creating media art exhibitions, events and workshops</li>
        </ul>
    </div>
    <div className="firma f-name">
        <h3>2016 – 2018</h3>
        <h2>Co-founder & designer <br/>in: SUM Architekci Karjobrazu SP. z o.o. </h2>
        <ul>
          <li>Company website development </li>
          <li>WordPress implementation </li>
          <li>Google analytics, hotjar along with administration of the website</li>
          <li>Development of graphic designs for the website</li>
          <li>Design & Project management in landscape architecture field</li>
        </ul>
    </div>
    <div className="firma f-name">
        <h3>2014 – 2016</h3>
        <h2>Landscape Architect <br/>in: In & out Architekci krajobrazu</h2>
          <ul>
            <li>Design landscape architecture </li>
            <li>Maintenance practices and technical specifications development</li>
            <li>Investment costs execution </li>
            <li>Graphic designs in form of: visualizations, posters and multimedia presentations</li>
          </ul>
    </div>
    </Exp>
)

export default Experience
