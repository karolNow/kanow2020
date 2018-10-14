<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
$KN-col: #2E3192;
body{
  margin: 0px;
}
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
#app {

  font-family: 'Roboto Condensed', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  h1{
    font-weight: 400;
    margin: 1em 0;
    color: $KN-col;
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    background-image:linear-gradient(transparent 50%, $KN-col 54%, transparent 56%);
    span{
      padding: 1em;
      background-color: white;
    }
  }
}
#nav {
  padding: 15px;
  background-color: $KN-col;
  a {
    font-size: 1.5em;
    padding: 0 2em;
    font-weight: 400;
    color: white;
    cursor: pointer !important;
    &:hover{
      cursor: pointer !important;
      font-weight: bold;
    }
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}


</style>
