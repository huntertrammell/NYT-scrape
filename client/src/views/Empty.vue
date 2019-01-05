<template>
    <div class="jumbotron bg-dark">
        <h1 class="header-text text-white">Articles have been removed</h1>
        <router-link to="/" class="btn btn-outline-info my-2 my-sm-0 header-text text-white">Take me home</router-link>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    beforeCreate(){
        axios.get('/api/empty')
            .then(res=> console.log(res))
            .catch(err => console.log(err)) 
    }
}
</script>

<style>

</style>
