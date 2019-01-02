<template>
  <div>
    <div class="intro">
      <h5 class="header-text text-center pt-2 text-white">{{ date }}</h5>
      <hr class="px-2">
    </div>
    <app-article-body/>
  </div>
</template>

<script>
import moment from 'moment'
import ArticleBody from '@/components/ArticleBody'
export default {
  name: 'ArticleWrapper',
  data(){
    return {
      msg: "Hello World",
      date: moment().format("dddd, MMMM Do YYYY")
    }
  },
  components: {
    appArticleBody: ArticleBody
  },
  methods: {
    //attempting to link weather package from NPM, will come back to this
    /*async getWeather() {
      weather.find({search: 'Kansas City', degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
        let city = result.location.name
        let temp = result.current.temperature + " F"
        let sky = result.current.skytext
        let curForcast = (`${city}, currently ${sky} and ${temp}`)
        this.forcast = curForcast
      });
    }*/
  },
  /*updated(){
    this.getWeather()
  }*/
}
</script>

<style>
.intro {
  background: #313131da;
}
</style>
