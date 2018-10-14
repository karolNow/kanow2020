<template>
  <div class="Education" id="Education">
<h1><span>Education</span></h1>
<hr>
<div class="school">
  <h2>Creative Coding</h2>
  <h2>POSTGRADUATE STUDIES</h2>
  <h2>SOF on SWPS 2016-2017</h2>
</div>


<hr>
<div class="school">
  <h2>Landscape Architecture</h2>
  <h2>ENGEENER & MASTER DEGREE</h2>
  <h2>SGGW 2011-2016</h2>
</div>

</div>
</template>

<script>
export default {
  name: 'Education',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$KN-col: #2E3192;
.school{
  h2{
    font-weight: 400;
  }
  h2:first-child{
    font-weight: bold;
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
