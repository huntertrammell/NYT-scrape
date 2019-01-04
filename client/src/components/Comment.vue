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
            <div class="m-2 text-center">
                <input class="btn btn-outline-info" type="submit" value="Submit" @click="addComment(user, comment)">
            </div>
        </form>
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
            axios
            .post('/api/comments/'+this.$props.id, {
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
