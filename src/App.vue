<template>
  <MainCard />
  <ProjectsCard />

  <ContactMe />
</template>

<script>

import MainCard from './components/MainCard.vue'
import ProjectsCard from './components/ProjectsCard.vue'

import ContactMe from './components/ContactMe.vue'

export default {
  name: 'App',
  components: {
    MainCard,
    ProjectsCard,

    ContactMe
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
