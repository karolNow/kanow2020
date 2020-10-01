import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Experience from "../components/Experience"
import Skills from "../components/skills"
import Technology from "../components/technology"
import Education from "../components/education"
import Communication from "../components/communication"
import Passions from "../components/passions"
import Image from "../components/image"
import SEO from "../components/seo"
import Nav from "../components/nav"
import CvHeader from "../components/headercv"

import {styled, createGlobalStyle} from "styled-components"
const CvStyle = createGlobalStyle`

  h1,
  h2,
  h3,
  h4,
  h5,
  h6{
    font-family: 'DM Serif Display', serif;
  }
`

const CvPage = () => (
  <Layout>
    <SEO title="CV | Karol Nowak" />
    <CvStyle/>
    <Nav/>
    <CvHeader/>
    <Experience></Experience>
    <Skills></Skills>
    <Technology/>
    <Education></Education>
    <Communication></Communication>
    <Passions></Passions>
  </Layout>
)

export default CvPage
