<template>
    <div>
        <div v-for="comment in comments" :key="comment._id"> <!--This is where v-for will go-->
            <hr>
            <div class="body-text">
                <small><strong>{{ comment.user }}: </strong>{{ comment.comment }}</small>
                <br>
                <small class="text-muted">{{ comment.time }}</small>
                <a href="" class="float-right"><small class="text-muted" @click="removeComment()">delete</small></a>
            </div>
        </div>
        <form class="pt-4">
            <hr>
            <input type="text" class="form-control mb-1" placeholder="Username" v-model="user">
            <textarea type="text" class="form-control" placeholder="Add Comment..." v-model="comment"></textarea>
        </form>
        <div class="mt-1 text-center">
            <button class="btn btn-outline-info my-2" @click="addComment()">Add Comment</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
    data(){
        return {
            user: '',
            comment: '',
        }
    },
    props: ['comments', 'id'],
    methods: {
        addComment(user, comment){
            console.log("ive been pressed")
            axios
            .post('/api/comments/create', {
                refID: this.$props.id,
                user: this.user,
                comment: this.comment,
                time: moment().format("MM/DD/YY hh:mm a")
            })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
            this.$router.go('/')
        },
        removeComment(){
            console.log(this.$props.comments[0]._id)
            axios
            .get('/api/comments/remove/'+this.$props.id+'/'+this.$props.comments[0]._id)
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
