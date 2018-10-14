<template>
  <div class="passions">
    <h1><span>Passions</span></h1>
    <div class="Pas">

    <ul>
      <li>Travels</li>
      <li>New technologies</li>
      <li>Photography Music Movies</li>
      <li>Sports:Sailing Cycling Skiing</li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'Passion',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$KN-col: #2E3192;
.passions{
  background-image:url('../assets/PASSION.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.Pas{
  display: flex;
  justify-content: center;
}
h1{
  background-image:linear-gradient(transparent 85%, $KN-col 87%, transparent 90%) !important;
  span{
    padding: 0 !important;
    background-color: transparent !important;
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
  text-align: left;
  display: block;
  margin: 0 10px;
}
a {
  color: $KN-col;
}
</style>
