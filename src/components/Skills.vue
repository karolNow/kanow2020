<template>
<div class="skillsy">
<h1><span>Skills</span></h1>
<div class="skills">

  <div class="skill" id="html">
    <img src="../assets/html5.png" alt="html5 logo">
    <h3>HTML5</h3>
  </div>
  <div class="skill" id="sass">
    <img src="../assets/sass.png" alt="sass logo">
    <h3>SASS</h3>
  </div>
  <div class="skill" id="js">
    <img src="../assets/js.png" alt="js logo">
    <h3>JS</h3>
  </div>
  <div class="skill" id="jquery">
    <img src="../assets/jquery.png" alt="jquery logo">
    <h3>JQUERY</h3>
  </div>
  <div class="skill" id="php">
    <img src="../assets/php.png" alt="php logo">
    <h3>PHP</h3>
  </div>
  <div class="skill" id="npm">
    <img src="../assets/npm.png" alt="npm logo">
    <h3>NPM</h3>
  </div>
  <div class="skill" id="wordpress">
    <img src="../assets/wordpress.png" alt="wordpress logo">
    <h3>WORDPRESS</h3>
  </div>
  <div class="skill" id="adobe">
    <img src="../assets/adobe.png" alt="adobe logo">
    <h3> ADOBE XD,</br> PHOTOSHOP, </br> ILLUSTRATOR</h3>
  </div>
</div>
</div>

</template>

<script>
export default {
  name: 'Skills',
  props: {
    msg: String,
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$KN-col: #2E3192;
.skills{
  justify-content: center;
  display: flex;
  .skill{
      margin:0 1em;
      img{
        height: 80px !important;
      }
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: $KN-col;
}
</style>
