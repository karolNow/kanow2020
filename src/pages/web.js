import React from "react"
import { WProjnk } from "gatsby"
import Menu from '../components/GoBackMenu'
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Orcla from '../images/orkla.png'
import Kneipp from '../images/kneipp.gif'
import Lekam from '../images/lekam.png'
import Urgo from '../images/urgo.png'
import Verco from '../images/verco.png'
import Yokohama from '../images/yokohama.jpg'


const Plist = styled.ul`
  margin:1em;
`

const WProj = styled.li`
  list-style:none;
`

const Anchor = styled.a`
  display:block;
  border: 1px solid black;
  text-decoration: none;
  padding:0.5em 1em;
  margin-bottom:1em;
  &:hover{
    background-color: black;
    color:white;
    text-decoration:none;
  }
`
const Lgroup= styled.div`
  display:flex;
  flex-direcition:row;
  flex-wrap:wrap;
  align-items:center;
  justify-content:space-evenly;
  img{
    max-width:100px;
    height:auto;
  }
`

const WebPage = () => (
  <Layout>
    <SEO title="Digital/ Web projects" />
    <div>
    <h1>Digital Projects</h1>
    <p>
      I have worked with brands such as:
    </p>
    <Lgroup>
      <img src={Orcla} alt="logo orcla"/>
      <img src={Verco} alt="logo Verco"/>
      <img src={Yokohama} alt="logo Yokohama"/>
      <img src={Kneipp} alt="logo Kneipp"/>
      <img src={Lekam} alt="logo Lekam"/>
      <img src={Urgo} alt="logo Lekam"/>
    </Lgroup>
    <p> 
       Implementing websites for brands based mainly on technologies such as:         
       <br/><b>PHP, SCSS/CSS, HTML5, JS/JQuery, GATSBY</b>
    </p>
    <div>
      <p>
        Web pages I have been working on:
      </p>
      <Plist>
       <WProj><Anchor href="https://swiatkneippa.pl">swiatkneippa.pl | UX + development (custom template WP)</Anchor></WProj>
       <WProj><Anchor href="https://yokohama-online.pl/">yokohama-online.pl | UX + development</Anchor></WProj>
       <WProj><Anchor href="https://maglekam.pl/">maglekam.pl | UX + development (custom template WP)</Anchor></WProj>
       <WProj><Anchor href="https://sutrisept.pl/">sutrisept.pl | UX + development (custom template WP)</Anchor></WProj>
       <WProj><Anchor href="https://sutriheal.pl/">sutriheal.pl | (this is a copy of the one above with slight changes)</Anchor></WProj>
       <WProj><Anchor href="https://oczywistywybor.pl">oczywistywybor.pl | UX + development (custom template WP)</Anchor></WProj>
       <WProj><Anchor href="https://humanskillscenter.pl">humanskillscenter.pl | UX + development (custom template WP)</Anchor></WProj>
       <WProj><Anchor href="https://www.komfortum.pl/">www.komfortum.pl | LP development, made in gatsby</Anchor></WProj>
       <WProj><Anchor href="https://www.manusan.pl/">www.manusan.pl | LP development</Anchor></WProj>
       <WProj><Anchor href="https://www.premierjanolszewski">www.premierjanolszewski.pl | LP development</Anchor></WProj>
       <WProj><Anchor href="https://www.mollers.pl/">www.mollers.pl | (adaptation and corrections of the global WP + content management template)</Anchor></WProj>
       <WProj><Anchor href="https://www.colon.pl/">www.colon.pl | (adaptation and corrections of the global WP + content management template)</Anchor></WProj>
      </Plist>
      <p>
        For agency clients(Colon, Noble Health, Klar, Salvequick) I implement (design and develop) <b>Richcontents</b> - single pages (html/scss/js) on extisting Rossmann system.<br/>Sample projects:</p>
        <Plist>
        <WProj><Anchor href="https://www.rossmann.pl/Produkt/Skora-wlosy-i-paznokcie/Noble-Health-Class-A-Collagen-suplement-diety-zdrowa-piekna-skora-mocne-wlosy-i-paznokcie-90-szt,135589,9016">Noble-Health Richcontent</Anchor></WProj>
        <WProj><Anchor href="https://www.rossmann.pl/Produkt/Srodki-uniwersalne/Klar-uniwersalny-plyn-do-czyszczenia-koniczyna-750-ml,282214,8332">Klar Richcontent</Anchor></WProj>
        <WProj><Anchor href="https://www.rossmann.pl/Produkt/Plastry-i-opatrunki/Salvequick-Transparent-przezroczysty-plaster-odporny-na-brud-i-wode-20-szt,14290,8467">Salveqick Richcontent</Anchor></WProj>
        </Plist>
        <p>
          In addition, I was doing programming work on various clients websites, implementing custom plugins for global websites, CCS corrections, mailing, and customizing websites for RWD
        </p>
    </div>
    </div>
    <Menu/>
  </Layout>
)

export default WebPage