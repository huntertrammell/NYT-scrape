<template>
    <div class="article-wrapper container">
        <h1 class="header-text text-white mb-4">NYT Scraper</h1>
        <h5 class="body-text text-white mb-4">This MEVN stack application was built by <a href="https://huntertrammell.github.io/" target="_blank" class="link-text">Hunter Trammell</a></h5>
        <form class="form-inline my-4">
            <router-link class="btn btn-outline-info my-2 my-sm-0 header-text text-white" to="/api/scrape">Scrape Articles</router-link>
        </form>
        <form class="form-inline my-4">
            <router-link class="btn btn-outline-info my-2 my-sm-0 header-text text-white" to="/api/empty">Empty Articles</router-link>
            <small class="text-muted font-weight-italic mt-1">*This will remove all articles as well as any likes or comments associated</small>
        </form>
    </div>
</template>

<script>
export default {
    name: 'RightArticle'
}
</script>

<style>
    .article-wrapper {
        height: 100vh;
        width: 100%;
        border-top: none;
        border-bottom: none;
        border-right: none;
        background: #313131da;
        overflow: hidden;
    }
    .link-text{
        color: #34aec0;
    }
    .link-text:hover{
        color: #34aec0;
    }
</style>
