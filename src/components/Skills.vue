<template>
<div class="Skills">
<h1><span>Skills</span></h1>
  <div class="skill">
    <h3>HTML</h3>
  </div>
  <div class="skill">
    <h3>SASS</h3>
  </div>
  <div class="skill">
    <h3>JS</h3>
  </div>
  <div class="skill">
    <h3>PHP</h3>
  </div>
  <div class="skill">
    <h3>NPM</h3>
  </div>
  <div class="skill">
    <h3>WORDPRESS</h3>
  </div>
  <div class="skill">
    <h3>SKETCH PHOTOSHOP ILLUSTRATOR</h3>
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
  color: #42b983;
}
</style>
