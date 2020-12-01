import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Tech = styled.section `
  margin: 30px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  li{
    display:block;
    text-align:center;
  }
  .skill{
    padding-left:1.3em;
    text-align: left;
  }
`


const Technology = ({ siteTitle }) => (
  <section className="skillsy" id="skillsy">
    <h1>Familiar technologies</h1>
    <hr/>
    <Tech className="skills">
      <div className="skill" id="html">
        {/* <img src="../assets/html5.png" alt="html5 logo" /> */}
        <h3>HTML5, </h3>
      </div>
      <div className="skill" id="sass">
        {/* <img src="../assets/sass.png" alt="sass logo" /> */}
        <h3>SASS/ CSS3,</h3>
      </div>
      <div className="skill" id="js">
        {/* <img src="../assets/js.png" alt="js logo" /> */}
        <h3>JS,</h3>
      </div>
      <div className="skill" id="jquery">
        {/* <img src="../assets/jquery.png" alt="jquery logo"/> */}
        <h3>JQuery,</h3>
      </div>
      <div className="skill" id="php">
        {/* <img src="../assets/php.png" alt="php logo"/> */}
        <h3>PHP,</h3>
      </div>
      <div className="skill" id="npm">
        {/* <img src="../assets/npm.png" alt="npm logo"/> */}
        <h3>NPM,</h3>
      </div>
      <div className="skill" id="wordpress">
        {/* <img src="../assets/wordpress.png" alt="wordpress logo"/> */}
        <h3>WORDPRESS,</h3>
      </div>
      <div className="skill" id="GATSBY">
        {/* <img src="../assets/wordpress.png" alt="wordpress logo"/> */}
        <h3>GATSBYJS,</h3>
      </div>
      <div className="skill" id="XD">
        {/* <img src="../assets/adobe.png" alt="adobe logo"/> */}
        <h3>ADOBE XD,</h3>
      </div>
      <div className="skill" id="PHOTOSHOP">
        {/* <img src="../assets/adobe.png" alt="adobe logo"/> */}
        <h3>PHOTOSHOP,</h3>
      </div>
      <div className="skill" id="ILLUSTRATOR">
        {/* <img src="../assets/adobe.png" alt="adobe logo"/> */}
        <h3>ILLUSTRATOR</h3>
      </div>
      <div className="skill" id="git">
        {/* <img src="../assets/adobe.png" alt="adobe logo"/> */}
        <h3>GIT</h3>
      </div>
      <div className="skill" id="github">
        {/* <img src="../assets/adobe.png" alt="adobe logo"/> */}
        <h3>GITHUB</h3>
      </div>
    </Tech>
  </section>
)

export default Technology
