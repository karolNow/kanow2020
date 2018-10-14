<template>
<div class="skillsy">
<h1><span>Skills</span></h1>
<div class="skills">

  <div class="skill" id="html">
    <img src="../assets/html5.png" alt="html5">
    <h3>HTML5</h3>
  </div>
  <div class="skill" id="sass">
    <h3>SASS</h3>
  </div>
  <div class="skill" id="js">
    <h3>JS</h3>
  </div>
  <div class="skill" id="jquery">
    <h3>JQUERY</h3>
  </div>
  <div class="skill" id="php">
    <h3>PHP</h3>
  </div>
  <div class="skill" id="npm">
    <h3>NPM</h3>
  </div>
  <div class="skill" id="wordpress">
    <h3>WORDPRESS</h3>
  </div>
  <div class="skill" id="potoshop">
    <h3>SKETCH, ADOBE XD, PHOTOSHOP, ILLUSTRATOR</h3>
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
