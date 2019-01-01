<template>
    <div>
        <img :src="img" class="card-img-top" :alt="title">
        <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted">{{ date | dateFormat}}</h6>
            <h5 class="card-title">{{ title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">by {{ author }}</h6>
            <p class="card-text">{{ summary }}</p>
            <a :href="'https://www.nytimes.com' + link" target="_blank" class="btn btn-primary">Read More</a>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    name: 'Article',
    props: ['img', 'title', 'summary', 'author', 'date', 'link'],
    filters: {
        dateFormat(value){
            return moment(value, "YYYY/MM/DD").format("MMMM Do, YYYY")
        }
    }
}
</script>

<style>

</style>
