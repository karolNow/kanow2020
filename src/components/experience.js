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
        <h2>Agencja Gordo</h2>
        <h3>2018 – actual  (full-time)</h3>
        <h2>WEB Designer/ Front-end</h2>
        <ul>
            <li>Information architecture and UX design of web applications.</li>
            <li>Web development - blogs, landing pages</li>
            <li>WordPress themes development</li>
            <li>CMS architecture adjustments, and content administration.</li>
            <li>Third parties solutions implementation and analytics - Google Analytics, Hotjar, Pixel, etc.</li>
            <li>User testing</li>
            <li>CMS systems usage training</li>
            <li>Maintenance and administration of agency client's websites.</li>
        </ul>
    </div>
    <div className="firma f-name">
        <h2>School of Form (SWPS University)</h2>
        <h3>2020 – actual (part-time)</h3>
        <h2>Lecturer<br/></h2>
        <ul>
          <li>Teaching students creative coding using Arduino and processing</li>
          <li>Teaching digital fabrication - 3d printing, laser cutting, usage of Fusion360</li>
        </ul>
        <h3>2019 – actual (part-time)</h3>
        <h2>Academic assistant - Creative Coding</h2>
        <ul>
          <li>Assistance in teaching students</li>
          <li>Administration and Teaching 3d printing, laser cutting, and other use of workshop devices</li>
          <li>Creating media art exhibitions, events, and workshops</li>
        </ul>
    </div>
    <div className="firma f-name">
        <h2>SUM Architekci Krajobrazu SP. z o.o.</h2>
        <h3>2016 – 2018</h3>
        <h2>Co-founder & designer</h2>
        <ul>
          <li>Company website development </li>
          <li>WordPress implementation </li>
          <li>Google Analytics, Hotjar along with administration of the website</li>
          <li>Development of graphic designs for the website</li>
          <li>Design & Project management in the landscape architecture field</li>
        </ul>
    </div>
    <div className="firma f-name">
        <h2>In & out Architekci krajobrazu</h2>
        <h3>2014 – 2016</h3>
        <h2>Landscape Architect</h2>
          <ul>
            <li>Design landscape architecture </li>
            <li>Maintenance practices and technical specifications development</li>
            <li>Investment costs execution </li>
            <li>Graphic designs in form of visualizations, posters, and multimedia presentations</li>
          </ul>
    </div>
    </Exp>
)

export default Experience
