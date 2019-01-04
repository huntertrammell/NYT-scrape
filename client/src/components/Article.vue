<template>
    <div>
        <img :src="img" class="card-img-top" :alt="title">
        <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted">{{ date | dateFormat}}</h6>
            <h5 class="card-title body-text font-weight-bold"><a :href="'https://www.nytimes.com' + link" target="_blank" class="title-link">{{ title }}</a></h5>
            <h6 class="card-subtitle mb-2 text-muted">by {{ author }}</h6>
            <p class="card-text body-text">{{ summary }}</p>
        </div>
        <div class="card-footer">
            <div class="row">
                <div class="likes col-6 text-left">
                    <span v-if="clicked" @click="unlike()"><i class="fas fa-heart"></i></span>
                    <span v-else @click="like()"><i class="far fa-heart"></i></span>
                    <small> {{ likeCount }} Likes</small>
                </div>
                <div class="comments col-6 text-right">
                    <a class="comments" href="#" @click="expanded === false ? expanded = true : expanded = false"><i class="far fa-comment"></i> <small> Comments ({{ commentCount }})</small></a>
                </div>
            </div>
            <transition name="bounce">
               <app-comment :comments="comments" 
                            :id="id" 
                            v-if="expanded"/>
            </transition>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import axios from 'axios'
import Comment from '@/components/Comment'
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
            'likes',
            'comments'
    ],
    components: {
        appComment: Comment
    },
    data(){
        return{
            clicked: false,
            likeCount: parseInt(this.$props.likes),
            commentCount: 0,
            expanded: false,
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
        }
    }, 
    beforeMount(){
        this.commentCount = 0
        if (this.$props.comments == undefined){
            this.commentCount = 0
        } else {
            this.commentCount = this.$props.comments.length
        }
    }
}
</script>

<style>
.title-link{
    color: #34aec0;
}
.title-link:hover{
    color: #34aec0;
}
.comments:hover {
    color: #34aec0;
}
.comments{
    color: #34aec0;
}
.likes {
    color: #34aec0;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
