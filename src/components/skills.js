import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Skille = styled.section `
  diplay:block;
`


const Skills = ({ siteTitle }) => (
  <section className="skillsy" id="skillsy">
    <h1>Skills</h1>
    <hr/>
    <Skille className="skills">
      <ul>
        <li>Front-end code</li>
        <li>User Experience Planning</li>
        <li>Ineraction design</li>
        <li>Information Architecture</li>
        <li>Mock-ups and quick sketches</li>
        <li>Human computer interaction design</li>
        <li>Basic Analytics (GA, Heatmaps, Recordings)</li>
      </ul>
    </Skille>
  </section>
)

export default Skills
