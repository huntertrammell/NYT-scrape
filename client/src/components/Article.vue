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
        <div class="card-footer">
            <div class="row">
                <div class="likes col-6 text-left">
                    <span v-if="clicked" @click="unlike()"><i class="fas fa-heart"></i></span>
                    <span v-else @click="like()"><i class="far fa-heart"></i></span>
                    <small> {{ likeCount }} Likes</small>
                </div>
                <div class="comments col-6 text-right">
                    <a href="#commentSection" data-toggle="collapse"><i class="far fa-comment"></i> <small> Comments ({{ commentCount }})</small></a>
                </div>
            </div>
            <div class="collapse" id="commentSection">
                <div> <!--This is where v-for will go-->
                    <hr>
                    <div class="">
                        <small><strong>HTram1221: </strong>OMG this is so lame</small>
                        <br>
                        <small class="text-muted">1/1/19 11:27pm</small>
                    </div>
                    <hr>
                </div>
                <form class="pt-4">
                    <input type="text" class="form-control mb-1" placeholder="Username" v-model="user">
                    <textarea type="text" class="form-control" placeholder="Add Comment..." v-model="comment"></textarea>
                    <div class="m-2 text-center">
                        <input class="btn btn-outline-info" type="submit" value="Submit" @click.prevent="addComment(user, comment)">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import axios from 'axios'
import 'bootstrap';
export default {
    name: 'Article',
    props: [
            'img', 
            'title', 
            'summary', 
            'author', 
            'date', 
            'link', 
            'id',
            'likes'
    ],
    data(){
        return{
            clicked: false,
            likeCount: parseInt(this.$props.likes),
            commentCount: 0,
            user: '',
            comment: ''
        }
    },
    filters: {
        dateFormat(value){
            return moment(value, "YYYY/MM/DD").format("MMMM Do, YYYY")
        }
    },
    methods: {
        like() {
            this.clicked = true
            this.likeCount++
            axios
            .get('/api/articles/'+ this.$props.id + '/' +this.likeCount)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
        },
        unlike(){
            this.clicked = false
            this.likeCount--
            axios
            .get('/api/articles/'+ this.$props.id + '/' +this.likeCount)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
        },
        addComment(user, comment){
            this.commentCount++
            axios
            .post('/api/articles/comments/'+this.$props.id, {
                user: this.user,
                comment: this.comment
            })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
}
</script>

<style>

</style>
