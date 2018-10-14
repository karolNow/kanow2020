<template>
<div class="Experience">
  <h1><span>Experience</span></h1>

  <div class="firma f-name">
    <div class="title">
      <h1>JUNIOR WEB DEV</h1>
      <h2>2018 acctual</h2>
    </div>
      <div class="descryption">
      <h1>Agencja Gordo Piotr Wojcicki </h1>
      <div class="project">
      <h2>Yohohama.pl</h2>
      <ul>
        <li>Design of website</li>
        <li>Front development</li>
        <li>Wordpress tempalate design and development myscl</li>
      </ul>
      </div>
      <div class="project">
      <h2>YTo jest to </h2>
      <ul>
        <li>Design of website</li>
        <li>Front development</li>
        <li>Wordpress tempalate design and development myscl</li>
      </ul>
      </div>
      <div class="project">
      <h2>Yohohama.pl</h2>
      <ul>
        <li>Design of website</li>
        <li>Front development</li>
        <li>Wordpress tempalate design and development myscl</li>
      </ul>
      </div>
      <div class="project">
      <h2>Yohohama.pl</h2>
      <ul>
        <li>Design of website</li>
        <li>Front development</li>
        <li>Wordpress tempalate design and development myscl</li>
      </ul>
      </div>
    </div>
  </div>
  <div class="firma f-name">
    <div class="title">
      <h1>CO-FOUNDER  & DESIGNER</h1>
      <h2>2016 - 2018</h2>
    </div>
      <div class="descryption">
      <h1> SUM ARCHITEKCI KRAJOBRAZU SP. Z O.O. </h1>
      <div class="project">
      <h2>Yohohama.pl</h2>
      <ul>
        <li>Design of website</li>
        <li>Front development</li>
        <li>Wordpress tempalate design and development myscl</li>
      </ul>
      </div>
      <div class="project">
      <h2>YTo jest to </h2>
      <ul>
        <li>Design of website</li>
        <li>Front development</li>
        <li>Wordpress tempalate design and development myscl</li>
      </ul>
      </div>
      <div class="project">
      <h2>Yohohama.pl</h2>
      <ul>
        <li>Design of website</li>
        <li>Front development</li>
        <li>Wordpress tempalate design and development myscl</li>
      </ul>
      </div>
      <div class="project">
      <h2>Yohohama.pl</h2>
      <ul>
        <li>Design of website</li>
        <li>Front development</li>
        <li>Wordpress tempalate design and development myscl</li>
      </ul>
      </div>
    </div>
  </div>
  <div class="firma f-name">
    <div class="title">
      <h1>DESIGNER</h1>
      <h2>2014 -2016</h2>
    </div>
      <div class="descryption">
      <h1>IN & OUT ARCHITEKCI KRAJOBRAZU -  </h1>
      <div class="project">
      <h2>Yohohama.pl</h2>
      <ul>
        <li>Design of website</li>
        <li>Front development</li>
        <li>Wordpress tempalate design and development myscl</li>
      </ul>
      </div>
      <div class="project">
      <h2>YTo jest to </h2>
      <ul>
        <li>Design of website</li>
        <li>Front development</li>
        <li>Wordpress tempalate design and development myscl</li>
      </ul>
      </div>
      <div class="project">
      <h2>Yohohama.pl</h2>
      <ul>
        <li>Design of website</li>
        <li>Front development</li>
        <li>Wordpress tempalate design and development myscl</li>
      </ul>
      </div>
      <div class="project">
      <h2>Yohohama.pl</h2>
      <ul>
        <li>Design of website</li>
        <li>Front development</li>
        <li>Wordpress tempalate design and development myscl</li>
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
/* GRID */
.firma{
display: grid;
grid-template-columns: 2fr 7fr;
grid-template-areas:
'ftitle fdesc'
'fdate fdesc'
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
    text-align: center;
    background-image: none !important;
    span{
      padding: 1em;
      background-color: white;
    }
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
  text-align: left;
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
