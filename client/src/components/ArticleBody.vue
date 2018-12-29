<template>
    <div class="container-fluid">
        <h2 class="header-text text-center article-disp">Recent Articles in Technology</h2>
        <div class="m-4 content-wrapper rounded">
            <div class="row m-2 p-2">
                <app-article />
            </div>
        </div>
    </div>
</template>

<script>
import Article from '@/components/Article'
export default {
    name: 'ArticleBody',
    components: {
        appArticle: Article
    }
}
</script>

<style>
    .content-wrapper {
        border: 1px #e5e5e5 solid;
        box-shadow: 0px 0px 10px 1px #888888;
        height: 700px;
        background: #fffef8;
    }
    .article-disp {
        text-shadow: 2px 2px 4px #888888;
    }
</style>
