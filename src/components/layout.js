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


import Header from "./header"
import Footer from "./footer"
import GlobalStyle from './GlobalStyles'
import "./layout.css"



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
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1em`,
          height:`100%`,
        }}
      >
        <GlobalStyle/>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main style={{
          minHeight:`96%`, 
          padding:`1em`,
          }}>{children}
        </main>
        <Footer/>
        <CookieConsent
          location="bottom"
          buttonText="Ok I accepy"
          style={{ background: "black" , color:"white" }}
          buttonStyle={{ backgroundColor: "white", color: "black", fontSize: "13px" }}
          expires={150}
          declineButtonText="Decline"
          cookieName="gatsby-gdpr-google-tagmanager">
          Hey! I use cookies to, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services.
          </CookieConsent>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
