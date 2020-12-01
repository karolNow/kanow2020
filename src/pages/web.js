import React from "react"
import { Link } from "gatsby"
import KnHead from  '../images/KN_HEAD.jpg'
import Menu from '../components/GoBackMenu'

import Layout from "../components/layout"
import SEO from "../components/seo"

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
        Pages on which I have worked / worked:
      </p>
      <ul>
       <li><a href="https://swiatkneippa.pl">swiatkneippa.pl</a> UX + development (custom template WP)</li> 
       <li><a href="https://yokohama-online.pl/">yokohama-online.pl</a> UX + development</li> 
       <li><a href="https://maglekam.pl/">maglekam.pl</a> UX + development (custom template WP)</li> 
       <li><a href="https://sutrisept.pl/">sutrisept.pl</a> UX + development (custom template WP)</li> 
       <li><a href="https://sutriheal.pl/">sutriheal.pl</a> (this is a copy of the one above with slight changes)</li> 
       <li><a href="https://oczywistywybor.pl">oczywityswybor.pl</a> UX + development (custom template WP)</li> 
       <li><a href="https://humanskillscenter.pl">humanskillscenter.pl</a> UX + development (custom template WP)</li> 
       <li><a href="https://www.mollers.pl/">www.mollers.pl</a> (adaptation and corrections of the global WP + content management template)</li> 
       <li><a href="https://www.colon.pl/">www.colon.pl</a> (adaptation and corrections of the global WP + content management template)</li> 
      </ul>
      <p>
        For agency clients(Colon, Noble Health, Klar, Salvequick) I implement richcontents - simple html pages on ext.sys.Rossmann.Sample project(find out more tab):
        https: //www.rossmann.pl/Produkt/Skora-wlosy-i-parańcie/Noble-Health-Class-A-Collagen-suplement-diety-zdrowa-piekna-skora-mocne-wlosy-i-patulcie-90- pcs, 135 589.9016
        In addition, I was doing programming work on various clients ' websites, implementing custom plugins for global websites, CCS corrections, mailing, and customizing websites for RWD
      </p>
    </div>
    </div>
    <Menu/>
  </Layout>
)

export default WebPage