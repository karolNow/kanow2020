<template>
  <div class="Head">
    <h1>Karol Nowak</h1>
    <h2>CURRICULUM VITAE</h2>

  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$KN-col: #2E3192;
.Head{
  padding: 5em 0;
  background-image: url('../assets/KN_HEAD.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  //margin: 0 0 2em 0;
}
h1 {
  font-family: 'Roboto', sans-serif;
  color: white;
  opacity: 0.6;
  font-size: 7em;
  font-weight: 900 !important;
  text-transform: uppercase;
  background-image:none !important;
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
