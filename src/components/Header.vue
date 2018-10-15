<template>
  <div class="Head">
    <h1>Karol Nowak</h1>
    <h2>CURRICULUM VITAE</h2>
    <div class="links">
    <a href="http://www.kanow.pl" target="_blank">www.kanow.pl</a></br>
    <a href="mailto:hello@kanow.pl">hello@kanow.pl</a></br>
    <a href="tel:508592222">508592222</a></br>
  </div>
    <p>Szeroki dunaj 7/1a</br>
    00-255 Warszawa</p>

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
  padding: 5em 5em;
  background-image: url('../assets/KN_HEAD.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  //margin: 0 0 2em 0;
  text-align: right;
}
h1 {
  margin:0px !important;
  font-family: 'Roboto', sans-serif;
  color: $KN-col;
  opacity: 0.6;
  font-size: 6em;
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
p{
  font-size: 1.2em;
}
.links{
a {
  cursor: pointer;
  transition: 0.3s ease;
  text-decoration: none;
  color: $KN-col;
  font-size: 1.5em;
  &:hover{
    transition: 0.3s ease;
    font-size:1.6em;
    text-decoration:line-through;
  }
}
}
</style>
