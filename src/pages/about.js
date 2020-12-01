import React from "react"
import { Link } from "gatsby"
import KnHead from  '../images/KN_HEAD.jpg'
import Menu from '../components/GoBackMenu'


import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About page" />
    <img style={{width:`250px`, clipPath:`circle()`}} className="kn-photo" src={KnHead} alt="Karol Nowak - photo"/>
      <h1>Karol Nowak</h1>
      {/* <p>W swoich projektach zawsze stara się zwracać szczególną uwagę na ludzi i środowisko oraz to w jaki sposób
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
              </p> */}
      <p>
      In his projects, he always tries to pay particular attention to people and the environment, and how his works affect them. The current area of his research and design interests is the use of new media (technology, programming) as a material for interaction with nature and space.
      <br/><br/>
      He graduated with honors for his MA thesis in the field of Landscape Architecture at the Warsaw University of Life Sciences. He also completed postgraduate Creative Coding studies at the School of Form at the SWPS University in Warsaw, where he is currently an assistant, helping to teach artists and designers to code.
      <br/><br/>
      Creator of installations presented at GDD 2018 and 2019, TEDX Warsaw 2018 and during scientific and business conferences. Designer of Warsaw hammocks, researcher of Warsaw squares. He collaborated with: the National Museum in Warsaw, the German Embassy in Warsaw, the Bęc Zmiana Foundation, and the Puszka Foundation.
              </p>
    <Menu />
  </Layout>
)

export default SecondPage
