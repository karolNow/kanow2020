<template>
<div class="Comunnication" id="Communication">
<h1><span>Languages</span></h1>
<h2>Polish: mother language</h2>
<h2>English: B2/C1</h2>
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
h2{
  font-weight: 400;
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
