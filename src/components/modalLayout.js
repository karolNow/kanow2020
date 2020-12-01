/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import FooterArt from "./footer-art"
import "./layout.css"
import GlobalStyle from './GlobalStyles'



const ModalLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle/>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div id="modal">
        <main>
          {children}
        </main>
        <FooterArt/>
      </div>
    </>
  )
}

ModalLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ModalLayout
