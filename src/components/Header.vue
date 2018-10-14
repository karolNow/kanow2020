<template>
  <div class="Head">
    <h1>Karol Nowak</h1>

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
.Head{
  padding: 10em 0;
  background-image: url('../assets/KN_HEAD.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
  color: #42b983;
}
</style>
