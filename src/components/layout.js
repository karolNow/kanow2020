/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import CookieConsent from 'react-cookie-consent'
import styled from 'styled-components'
import {Media} from "../media/media"


import Header from "./header"
import Footer from "./footer"
import GlobalStyle from './GlobalStyles'
import "./layout.css"


const All = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1em;
  height: 80%;

  ${Media.sm`
    padding: 0 0em;
    height: 100%;
  `}
  `

const Main = styled.main`
  min-height: 96%;
  padding: 1em;

  ${Media.sm`
    min-height: 85%;
    padding: 0 0 1em 0;
  `}
  `

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <All>
        <GlobalStyle/>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Main>
          {children}
        </Main>
        <Footer/>
        <CookieConsent
          location="bottom"
          buttonText="Ok, I accept ✌️"
          style={{ background: "black" , color:"white" }}
          buttonStyle={{ backgroundColor: "white", color: "black", fontSize: "16px" }}
          expires={150}
          declineButtonText="Decline"
          cookieName="gatsby-gdpr-google-tagmanager">
          Hey! I use cookies to, to provide social media features and to analyse traffic. I also share information about your use of site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services.
          </CookieConsent>
      </All>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
