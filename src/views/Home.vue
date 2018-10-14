<template>
  <div class="home">
    <Header />
    <div  id="nav">
      <a v-scroll-to="'#Experience'">Experience</a>
      <a v-scroll-to="'#skillsy'">Skills</a>
      <a v-scroll-to="'#Education'">Education</a>
      <a v-scroll-to="'#Communication'">Communication</a>
    </div>
    <Experience />
    <Skills />
    <Education />
    <Communication />
    <Passion/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Experience from '@/components/Experience.vue';
import Skills from '@/components/Skills.vue';
import Education from '@/components/Education.vue';
import Communication from '@/components/Communication.vue';
import Passion from '@/components/Passion.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'home',
  components: {
    Header,
    Experience,
    Skills,
    Education,
    Communication,
    Passion,
    Footer,
  },
};

</script>

<style scoped media="screen 1440">

  /* grid */
  .home{
  display: grid;
  grid-template-columns: 1fr;
  }
  /* styles */
  img{
    max-width: 100vw;
  }
</style>
