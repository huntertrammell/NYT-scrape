<template>
  <app-home />
</template>

<script>
  import Home from '@/views/Home.vue'
  export default {
    components: {
      appHome: Home
    }
  }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Playfair+Display+SC|Raleway');
.body-text {
  font-family: 'Raleway', sans-serif;
}
.header-text {
  font-family: 'Playfair Display SC', serif;
}
body {
  overflow-x: hidden;
}
html {
  overflow-x: hidden;
}
</style>

