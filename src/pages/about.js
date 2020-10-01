import React from "react"
import { Link } from "gatsby"
import KnHead from  '../images/KN_HEAD.jpg'


import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About page" />
    <img style={{width:`250px`, clipPath:`circle()`}} className="kn-photo" src={KnHead} alt="Karol Nowak - photo"/>
      <h1>Karol Nowak</h1>
      <p>W swoich projektach zawsze stara się zwracać szczególną uwagę na ludzi i środowisko oraz to w jaki sposób
                oddziałują na nich jego prace. Aktualnym obszarem jego zainteresowań badawczych oraz projektowych jest
                wykorzystanie
                nowych mediów (technologii, programowania) jako tworzywa do współdziałania z naturą i
                przestrzenią.<br/><br/>
                Ukończył studia z wyróżnieniem za pracę magisterską z dziedziny Architektury Krajobrazu na SGGW w
                Warszawie.
                Ukończył również podyplomowe studia Creative Coding w School of Form na Uniwersytecie SWPS w Warszawie,
                gdzie
                aktualnie pełni rolę asystenta, pomagając uczyć artystów i projektantów kodować.<br/><br/>
                Twórca instalacji prezentowanych na GDD 2018 i 2019, TEDX Warsaw 2018 oraz podczas konferencji
                naukowych i biznesowych. Projektant warszawskich hamaków, badacz warszawskich placów. Współpracował
                między innymi z:
                MNW, Ambasadą Niemiec w Warszawie, Fundacją Bęc Zmiana, Fundacją Puszka.
              </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
