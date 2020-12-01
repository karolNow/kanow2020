import React from "react"
import { WProjnk } from "gatsby"
import Menu from '../components/GoBackMenu'
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"


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

const WebPage = () => (
  <Layout>
    <SEO title="About page" />
    <div>
    <p>
      I have worked with brands such as Orcla Care, Lekam, Verco, Yokohama, Kneipp, implementing website designs
      for internal brands based mainly on technologies such as: php, scss / css, html, js / jquery. 
    </p>
    <div>
      <p>
        Pages on which I have worked:
      </p>
      <Plist>
       <WProj><Anchor href="https://swiatkneippa.pl">swiatkneippa.pl | UX + development (custom template WP)</Anchor></WProj>
       <WProj><Anchor href="https://yokohama-online.pl/">yokohama-online.pl | UX + development</Anchor></WProj>
       <WProj><Anchor href="https://maglekam.pl/">maglekam.pl | UX + development (custom template WP)</Anchor></WProj>
       <WProj><Anchor href="https://sutrisept.pl/">sutrisept.pl | UX + development (custom template WP)</Anchor></WProj>
       <WProj><Anchor href="https://sutriheal.pl/">sutriheal.pl | (this is a copy of the one above with slight changes)</Anchor></WProj>
       <WProj><Anchor href="https://oczywistywybor.pl">oczywityswybor.pl | UX + development (custom template WP)</Anchor></WProj>
       <WProj><Anchor href="https://humanskillscenter.pl">humanskillscenter.pl | UX + development (custom template WP)</Anchor></WProj>
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
          In addition, I was doing programming work on various clients ' websites, implementing custom plugins for global websites, CCS corrections, mailing, and customizing websites for RWD
        </p>
    </div>
    </div>
    <Menu/>
  </Layout>
)

export default WebPage