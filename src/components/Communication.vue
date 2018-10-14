<template>
<div class="Comunnication">
<h1><span>Communication </span></h1>
<h2>Languages:</h2>
<p>Polish</p>
<p>English B2/C1</p>
</div>
</template>

<script>
export default {
  name: 'Communication',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$KN-col: #2E3192;
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
