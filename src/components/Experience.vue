<template>
<div class="Experience" id="Experience">
  <h1><span>Experience</span></h1>

  <div class="firma f-name">
    <div class="title">
      <h1>JUNIOR WEB DEV</h1>
      <h2>2018 acctual</h2>
    </div>
      <div class="descryption">
      <h1>Agencja Gordo</h1>
      <div class="project">
      <h2><a href="http://www.yokohama.pl" target="_blank">Yohohama.pl</a></h2>
      <ul>
        <li>+ Website design / <a  v-scroll-to="'#adobe'"> ADOBE XD</a></li>
        <li>+ Ajustment CMS architecture / <a v-scroll-to="'#wordpress'">WORDPRESS</a> </li>
        <li>+ Wordpress template development /  <a v-scroll-to="'#php'">PHP</a> <a v-scroll-to="'#html'">HTML</a> <a v-scroll-to="'#sass'">SASS</a> <a v-scroll-to="'#js'">JS</a></li>
        <li>+ Google analitics setup</li>
        <li>+ Third party solutions setup</li>
        <li>+ Participation in meetings with client</li>
      </ul>
      </div>
      <div class="project">
      <h2><a href="http://www.maglekam.pl" target="_blank">Maglekam.pl</a></h2>
      <ul>
        <li>+ Ajustment CMS architecture / <a v-scroll-to="'#wordpress'">WORDPRESS</a> </li>
        <li>+ Wordpress template development / <a v-scroll-to="'#php'">PHP</a> <a v-scroll-to="'#html'">HTML</a> <a v-scroll-to="'#sass'">SASS</a> <a v-scroll-to="'#js'">JS</a></li>
        <li>+ Google analitics setup</li>
        <li>+ Third party solutions setup</li>
      </ul>
      </div>
      <div class="project orcla">
      <div class="sites">
      <h2><a href="http://mollers.pl" target="_blank">Mollers.pl</a></h2>
      <h2><a href="http://www.colonc.pl" target="_blank">Colonc.pl</a></h2>
      <h2><a href="http://www.kalms.pl" target="_blank">Kalms.pl</a></h2>
      <h2><a href="http://www.litozin.pl" target="_blank">Litozin.pl</a></h2>
      <h2><a href="http://www.wszystkoobliznach.pl" target="_blank">Wszystkooblinznach.pl</a></h2>
    </div>
      <ul>
        <li>+ Websites administration / <a v-scroll-to="'#wordpress'">WORDPRESS</a> </li>
        <li>+ Applying all necessary changes on client demand</li>
        <li>+ Rebuilding actual templates for new subpages</li>
      </ul>
      </div>
      <div class="project">
      <h2>Rossmann richcontent</h2>
      <ul>
        <li>+ Development of richcontent templates for brands at rossmann website/ <a v-scroll-to="'#html'">HTML</a> <a v-scroll-to="'#sass'">SASS</a> <a v-scroll-to="'#js'">JS</a></li>
      </ul>
      </div>
    </div>
  </div>
  <hr>
  <div class="firma f-name">
    <div class="title">
      <h1>CO-FOUNDER  & DESIGNER</h1>
      <h2>2016 - 2018</h2>
    </div>
      <div class="descryption">
      <h1> SUM ARCHITEKCI KRAJOBRAZU SP. Z O.O. </h1>
      <div class="project">
      <ul>
        <li>+	Company website development </li>
        <li>+ Implementation the WordPress / <a v-scroll-to="'#wordpress'">WORDPRESS</a> </li>
        <li>+	Google analytics, hotjar along with administration of the website</li>
        <li>+	Development of graphic designs for the website/ <a  v-scroll-to="'#adobe'"> PHOTOSHOP</a></li>
        <li>+	Design & Project management in landscape architecture field</li>
      </ul>
      </div>
    </div>
  </div>
  <hr>
  <div class="firma f-name">
    <div class="title">
      <h1>DESIGNER</h1>
      <h2>2014 -2016</h2>
    </div>
      <div class="descryption">
      <h1>IN & OUT ARCHITEKCI KRAJOBRAZU</h1>
      <div class="project">
      <ul>
        <li>+	Design in landscape architecture </li>
        <li>+	Maintenance practices and technical specifications development</li>
        <li>+	Investment costs execution </li>
        <li>+	Graphic designs in form of: visualizations, posters and multimedia presentations/ <a  v-scroll-to="'#adobe'"> PHOTOSHOP</a></li>
      </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Experience',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$KN-col: #2E3192;
/* GRID */
.firma{
display: grid;
grid-template-columns: 2fr 7fr;
grid-template-areas:
'ftitle fdesc'
'fdate fdesc'
}
.sites{
  display: flex;
  h2:first-child{
    margin: 0 1em 0 0;
  }
  h2{
    margin: 0 1em;
  }
}
.title{
  grid-area: ftitle
}
.date{
  grid-area: fdate
}
.descryption{
  grid-area: fdesc
}


/*  */
.firma{
  h1{
    padding: 0 1.6em;
    text-align: center;
    background-image: none !important;
    span{
      padding: 1em;
      background-color: white;
    }
  }
}
.descryption{
  h1{
    font-weight: bold !important;
    text-transform: uppercase;
    font-size: 1.6em;
    padding: 0px !important;
    text-align: left !important;
  }
  h2{
    color:$KN-col;
    padding: 6px;
    font-weight: 400;
  }
}
.title{
  h1{
    font-size: 1.6em;
  }
}
.project{
  text-align: left;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  line-height: 1.6em;
  font-size: 1.2em;
  text-align: left;
  display: block;
  margin: 0 10px;
  a{
    cursor: pointer;
    padding:2px;
  }
}
a {
  transition: 0.2s ease-in-out ;
  padding: 6px;
  border: 1px solid transparent;
  border-radius: 25px;
  text-decoration: none;
  color: $KN-col;
  &:hover{
    font-weight: bold;
    transition: 0.2s ease-in-out;
      border: 1px solid $KN-col;
      border-radius: 25px
  }
}
</style>
