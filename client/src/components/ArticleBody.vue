<template>
    <div class="container-fluid">
        <h2 class="header-text text-center article-disp">Recent Articles in Technology</h2>
        <div class="m-4 content-wrapper rounded">
            <div class="card-columns m-2 p-2">
                <div class="card m-1 p-1" v-for="article in articles" :key="article.id">
                    <app-article
                            :title="article.title" 
                            :link="article.link" 
                            :author="article.author" 
                            :summary="article.summary" 
                            :img="article.img" 
                            :date="article.date"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Article from '@/components/Article'
import axios from 'axios'

export default {
    name: 'ArticleBody',
    components: {
        appArticle: Article
    },
    data(){
        return {
            //gives me test article to work with
            articles: [{ 
                id: 1,
                title: 'One Giant Step for a Chess-Playing Machine',
                link: '/2018/12/26/science/chess-artificial-intelligence.html',
                summary:
                'The stunning success of AlphaZero, a deep-learning algorithm, heralds a new age of insight — one that, for humans, may not last long.By Steven Strogatz',
                img:
                'https://static01.nyt.com/images/2018/12/21/science/00DEEPCHESS1/00DEEPCHESS1-thumbWide-v2.jpg?quality=30&auto=webp',
                author: 'Steven Strogatz',
                date: '2018/12/26' 
                }]
        }
    },
    beforeCreate(){
        axios
        .get('/api/articles')
        .then(res => {
            this.articles = []
            res.data.forEach(article => {
                this.articles.push({
                    id: article._id,
                    title: article.title,
                    link: article.link,
                    summary: article.summary,
                    img: article.img,
                    author: article.author,
                    date: article.date
                })
            })
        })
    }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
    .content-wrapper {
        border: 1px #e5e5e5 solid;
        box-shadow: 0px 0px 10px 1px #888888;
        height: 700px;
        background: #fffef8;
        overflow-y: scroll;
    }
    .article-disp {
        text-shadow: 2px 2px 4px #888888;
    }
    .card-columns {
        @include media-breakpoint-only(lg) {
            column-count: 4;
        }
        @include media-breakpoint-only(xl) {
            column-count: 5;
        }
    }
</style>
