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
        <li>Projektowanie/ Programowanie witryn internetowych</li>
        <li>Projektowanie doświadczen użytkownika</li>
        <li>Projektowanie szkiców roboczych oraz makiet</li>
        <li>Projektowanie interfejsów użytkownika</li>
        <li>Projektowanie interakcji</li>
        <li>Interakcja człowiek - komputer</li>
      </ul>
    </Skille>
  </section>
)

export default Skills
