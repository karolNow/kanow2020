/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import {styled, createGlobalStyle} from "styled-components"

import Header from "./header"
import "./layout.css"

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6{
    font-family: 'DM Serif Display', serif;
  }

  @keyframes starmove {
	from {
		background-position-x: 5%;
	}
	to { 
		background-position-x: 1300%;
	}
  }

  a {
      color:black;
      text-decoration:none;
      &:hover{
        text-decoration:underline;
      }
      &:visited{
        color: #3c3b3b;
      }
      &:focus{
        color: #3c3b3b;
      }
    }

    footer{
      position:relative;
      z-index:5;
      p{
        margin:0;
      }
    }
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
        <footer style={{ 
          display:`flex`,
          flexDirection:`row`,
          padding:`0 1em`,
          justifyContent:`space-between`,
          }}>
          <a>IN</a>
          <a>GH</a>
          <a>FB</a>
          <p>
          © {new Date().getFullYear()}
          <Link to="/about"> Karol Nowak</Link>
          </p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
