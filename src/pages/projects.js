import React from "react"
import {Media} from "../media/media"

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
    ${Media.sm`
        h2,p,a{
            padding: 0 1rem;
        }
    `
    }
`
const Projects = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    max-width:960px;
    margin:3rem auto;
    h1{
      font-family: 'DM Serif Display';
    }
    ${Media.sm`
        margin:3rem auto;
    `}
`
const Exibits = styled.div`
    display: flex;
    flex-direction:column;
    align-items:flex-start;
    max-width:960px;
    margin:1em auto 2em auto;

    ${Media.sm`
        padding: 0 1rem;
    `}
`

const Instalations = () => (
  <ModalLayout>
    <SEO title="Tangible projects" />
        <Projects className="projects">
            <h1 style={{padding:` 0 1rem`}} className="ud-line">Tangible projects I made or was participant</h1>
            <Project className="project">
                <h2 className="project-title">USLESS MACHINES</h2>
                <img src={UslessBoxes} alt="usles boxes"/>
                {/* <p className="project-desc">Useless Machine to urządzenie, które ma funkcję, ale nie ma bezpośredniego celu.
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
                    ubogie w dotyku powierzchnie.</p> */}
                <p className="project-desc">The Useless Machine is a device that has a function but no immediate purpose. You can look at it philosophically: starting from a fun engineering hack or intellectual joke, show that devices that do not have functions or do not work properly are not considered useless machines. The most famous useless machines are inspired by a design by MIT professor and artificial intelligence pioneer Marvin Minsky, in which the only function of the device is to turn itself off by using its own switch. Karol Nowak's interpretation of Marvin Minsky's design adds reflection on the flattening of interactions with contemporary devices. Once upon a time, sensually rich interactions were dominated by screens and smooth, flat, touchable but poor-to-touch surfaces.</p>
            </Project>
            <Project className="project">
                <h2 className="project-title">EMPATYPHYTE<br/> {'{ Empatyfit }'}</h2>
                <img src={Empatyphyte} alt="empatyphyte"/>
                {/* <p className="project-desc">Dlaczego roślinność traktowania jest tak przedmiotowo? Próbą odpowiedzi na to
                    pytanie jest instalacja Empatyphyte, która umożliwiała widzom wejście w kontakt z rośliną. Aktorka
                    (Tilandsia duratii, oplątwa olbrzymia) umieszczona została w czarnym prostopadłościanie stanowącym
                    ramę do interakcji pomiedzy rośliną a człowiekiem. Oplątwa przemieszcza się w przestrzeni w reakcji
                    na położenie widza. Wykonuje takze swoje własne ruchy bazujące na odruchach nastycznych badanych
                    przez Karola Darwina
                </p> */}
                <p className="project-desc">Why is the treatment vegetation so subject? An attempt to answer this
                     the question is the Empatyphyte installation, which allowed viewers to come into contact with the plant. Actress
                     (Tilandsia duratii, enormous tangle) was placed in a black rectangular prism constituting
                     a frame for interaction between plant and human. The entanglement moves through space in reaction
                     on the viewer's position. It also makes its own movements based on the respondents' mood reflexes
                     by Charles Darwin
                </p>
                <a href="https://vimeo.com/246135225" target="blank" rel="noopener">Empatyphyte Video</a>
            </Project>

            <Project className="project">
                <h2 className="project-title">STAIRSEATS</h2>
                <img src={Stairsead} alt="stairseed"/>
                {/* <p className="project-desc">
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
                    Karol Muszyński) </p> */}
                <p className="project-desc">
                    The stairs are a dehumanized space that we often encounter in the city. Domination,
                    centricity,
                    the structural weight and monotony overwhelm the user, making him anxious because
                    are associated with effort,
                    fatigue and slowness. An attempt was made to change the perception of stairs by people. Invited
                    him to interact
                    by introducing the GREEN SEAT - a spatial distinguishing feature that visually breaks the weight and
                    domination
                    stair construction. The project assumed the use of an individual structure integrating the seat
                    with stairs, accenting his
                    sovereignty through different colors and spatial implementation of vegetation
                    concrete desert
                    degrees. Project realized in cooperation with SUM AK(<a href="https://zosiagagos.com/">Zofia
                        Gagoś</a>,
                    Karol Muszyński) </p>
                <a href="https://warszawa.wyborcza.pl/warszawa/51,34862,20674191.html">warszawa.wyborcza.pl</a>
                <a href="http://zielonainfrastruktura.pl/ogrody-na-stopniach-muzeum-narodowe-w-warszawie/">zielonainfrastruktura.pl</a>

            </Project>

            <Project className="project">
                <h2 className="project-title">WARSAW HAMMOCKS</h2>
                <img src={Hammock} alt="warsaw hammocks"/>
                <p className="project-desc">Project implemented for the City of Warsaw in Park Pole
                     Mokotowskie in cooperation with SUM AK(<a href="https://zosiagagos.com/">Zofia
                        Gagoś</a>, Karol Muszyński)</p>
            </Project>
        </Projects>
        <Exibits className="exibits">
            <h2 className="ud-line">Exhibitions / Texts</h2>
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
                <li><a href="https://placewarszawy.pl/pl/place-natury/rekomendacja/43">RECOMMENDATION GREEN PLACES OF WARSAW</a></li>
            </ul>
        </Exibits>
        <Gbm/>
  </ModalLayout>
)

export default Instalations
