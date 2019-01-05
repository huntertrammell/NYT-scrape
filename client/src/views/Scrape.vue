<template>
    <div class="jumbotron bg-dark">
        <h1 class="header-text text-white">New Articles have been added</h1>
        <small class="text-muted font-weight-italic">*Scraping takes a few seconds, please wait for a little while before returning to the homepage</small>
        <br>
        <router-link to="/" class="btn btn-outline-info my-2 my-sm-0 header-text text-white">Take me home</router-link>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    beforeCreate(){
        axios.get('/api/scrape')
            .then(res=> console.log(res))
            .catch(err => console.log(err)) 
    }
}
</script>

<style>

</style>
