import React from "react"
import { Link } from "gatsby"

import UslessBoxes from '../images/uslessbox.jpg'
import Empatyphyte from '../images/empatyphyte.jpg'
import Hammock from '../images/hammock2.jpg'
import Stairsead from '../images/stairsead.jpg'

import ModalLayout from "../components/modalLayout"
import SEO from "../components/seo"
import styled from 'styled-components'
import Gbm from "../components/GoBackMenu"


const Project = styled.div`
    display:flex;
    flex-direction:column;
    margin:2em auto 0 auto;
    img{
      width:100%;
      margin-bottom:1em;
    }
    h2{
      font-family: 'DM Serif Display';
      margin:10px 0;
    }
    p{
        margin-bottom:0.5em;
    }
`
const Projects = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    max-width:960px;
    margin:100px auto;
    h1{
      font-family: 'DM Serif Display';
    }
`
const Exibits = styled.div`
    display: flex;
    flex-direction:column;
    align-items:flex-start;
    max-width:960px;
    margin:1em auto 2em auto;
`

const Instalations = () => (
  <ModalLayout>
    <SEO title="About page" />
        <Projects className="projects">
            <h1 className="ud-line">Tangible projects I made or was participant</h1>
            <Project className="project">
                <h2 className="project-title">USLESS MACHINES</h2>
                <img src={UslessBoxes} alt="usles boxes"/>
                <p className="project-desc">Useless Machine to urządzenie, które ma funkcję, ale nie ma bezpośredniego celu.
                    Można na to
                    spojrzeć filozoficznie:
                    wychodząc od zabawnego hacku inżynieryjnego lub żartu intelektualnego, pokazać, że urządzenia, które
                    nie mają
                    funkcji
                    lub nie działają prawidłowo, nie są uważane za maszyny bezużyteczne.
                    Najbardziej znane bezużyteczne maszyny są zainspirowane projek- tem profesora MIT i pioniera
                    sztucznej
                    inteligencji,
                    Marvina Minsky’ego, w których jedyną funkcją urządzenia jest wyłączenie się poprzez użycie własnego
                    wyłącznika.
                    Interpretacja projektu Marvina Minsky’ego przez Karola Nowaka dodaje refleksję nad spłaszczeniem
                    interakcji ze
                    współczesnymi urządzeniami. Kiedyś zmysłowo bogate interakcje zdominowały ekrany i gładkie, płaskie,
                    dotykalne,
                    ale
                    ubogie w dotyku powierzchnie.</p>
            </Project>
            <Project className="project">
                <h2 className="project-title">EMPATYPHYTE {'{ Empatyfit }'}</h2>
                <img src={Empatyphyte} alt="empatyphyte"/>
                <p className="project-desc">Dlaczego roślinność traktowania jest tak przedmiotowo? Próbą odpowiedzi na to
                    pytanie jest instalacja Empatyphyte, która umożliwiała widzom wejście w kontakt z rośliną. Aktorka
                    (Tilandsia duratii, oplątwa olbrzymia) umieszczona została w czarnym prostopadłościanie stanowącym
                    ramę do interakcji pomiedzy rośliną a człowiekiem. Oplątwa przemieszcza się w przestrzeni w reakcji
                    na położenie widza. Wykonuje takze swoje własne ruchy bazujące na odruchach nastycznych badanych
                    przez Karola Darwina
                </p>
                <a href="https://vimeo.com/246135225" target="blank" rel="noopener">Empatyphyte Video</a>
            </Project>

            <Project className="project">
                <h2 className="project-title">STAIRSEATS</h2>
                <img src={Stairsead} alt="stairseed"/>
                <p className="project-desc">
                    Przestrzenią odhumanizowaną z którą spotykamy się bardzo często w mieście są schody. Dominacja,
                    centryczność,
                    konstrukcyjny ciężar i monotonia przytłaczają użytkownika, wprawiając go w stan obawy, gdyż
                    kojarzone są z wysiłkiem,
                    zmęczeniem oraz spowolnieniem. Podjęto próbę zmiany postrzegania schodów przez człowieka. Zaproszono
                    go do interakcji
                    poprzez wprowadzenie ZIELONEGO SIEDZISKA - wyróżnika przestrzennego rozbijającego wizualnie ciężar i
                    dominację
                    konstrukcji schodów. Projekt zakładał wykorzystanie indywidualnej konstrukcji integrującej siedzisko
                    ze schodami, akcentującej jego
                    suwerenność za pośrednictwem odmiennej kolorystyki i implementacji roślinności w przestrzennej
                    pustyni jaką są betonowe
                    stopnie. Projekt realizowny we współpracy SUM AK(<a href="https://zosiagagos.com/">Zofia
                        Gagoś</a>,
                    Karol Muszyński) </p>
                <a href="https://warszawa.wyborcza.pl/warszawa/51,34862,20674191.html">warszawa.wyborcza.pl</a>
                <a href="http://zielonainfrastruktura.pl/ogrody-na-stopniach-muzeum-narodowe-w-warszawie/">zielonainfrastruktura.pl</a>

            </Project>

            <Project className="project">
                <h2 className="project-title">WARSAW HAMMOCKS</h2>
                <img src={Hammock} alt="warsaw hammocks"/>
                <p className="project-desc">Projekt realizowny dla Urzędu Miasta Stołecznego Warszawy w Parku Pole
                    Mokotowskie we współpracy SUM AK(<a href="https://zosiagagos.com/">Zofia
                        Gagoś</a>, Karol Muszyński)</p>
            </Project>
        </Projects>
        <Exibits className="exibits">
            <h2 className="ud-line">Wystawy/Teksty</h2>
            <ul style={{listStyleType: "☉ "}}>
                <li>Śmierć w VR – Dream Adoption Society(Usless machines, Empatyphyte) <a
                        href="https://www.facebook.com/pg/dreamadoptionsociety/photos/?tab=album&album_id=554293965346219&__xts__%5B0%5D=68.ARAw2S3LXJWS33IG93E1CxVwKqfC5RZgoGkqja19IVvxFSfm7kqtSaerlp_KXsvfYHMZLEoAW2qqzj4g9S8_cZDwv0G99Dx0ZfDgdkrYrP5difapPKpiRAK9XnmA5sCpWXV-I5Q6ah6tTMtCjsvy2SCFdb0ynCO4HpaVK7VVKNKCizKkSpZ76cnb_G5o3etRN3b6bTZP6gAmjKq5i4U0o3yXLWbSgpy-RO4Et3K4V63dPblKKqh6OmVKI7LH16n54uA43pZr2O-28gAv3luiwTHOt8F01-TYOVkUn4Vt1nyOOPQKAtA8lxSWvfRxgkd_xpwyLuLG5zDA3hIJkkyAVaam7Yo4qaSd8XYkuCjQQg3cOUeGxKwPt4wUSFgA_VbR0ol1eSL-rf_hb7cYbzeKadbXcEuf1pszmpnFU8mJjZJo1wsny9dhkyAhs9Xh-jzgIYkIsUq_7bRrBD_kzIaFDs3R3-H_jMWV0EsSu1FceKwqWodg9V5oYvodeMh4wb4cbt3gf6PA-kEYWE14TuSL95aCOm5dNcuwJOFSa7Q&__tn__=-UC-R">foto</a>
                </li>
                <li>Warsaw Venture Cafe (Usless machines)</li>
                <li>MATERIA KODU - Gdynia Design Days 2019(Usless machines)</li>
                <li>Jutronauci 2018 (Empatyphyte)</li>
                <li>TEDxWarsaw 2018 "Man & Woman" (Empatyphyte)</li>
                <li>BITY I ATOMY - Gdynia Design Days 2018 (Empatyphyte)</li>
                <li>FESTIWAL OGRODÓW / Ogrody na stopniach - <em>10.09.16</em></li>
            </ul>
            <hr/>
            <ul style={{listStyleType: "☉ "}}>
                <li><a href="https://placewarszawy.pl/pl/place-natury/rekomendacja/43">REKOMENDACJA ZIELONE PLACE WARSZAWY</a></li>
            </ul>
        </Exibits>
        <Gbm/>
  </ModalLayout>
)

export default Instalations
