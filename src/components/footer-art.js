import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'

const Ftr = styled.footer`
    max-width:960px;
    margin:0 auto 10px auto;
    display: flex;
    flexDirection: row;
    padding: 0 1em 1em 1em;
    justify-content: space-between;
    position:relative;
    z-index:5;
    p{
       margin:0;
    }
`

const FooterArt = () =>(
    <Ftr>
    <a href="https://www.linkedin.com/in/ka-now/" target="_blank" className="aftr">IN</a>
    <a href="https://github.com/karolNow" target="_blank" className="aftr">GH</a>
    <a href="https://www.instagram.com/charile_sims/" target="_blank" className="aftr">IG</a>
    <p>
    © {new Date().getFullYear()}
    <Link to="/about"> Karol Nowak</Link>
    </p>
    </Ftr>
)

export default FooterArt