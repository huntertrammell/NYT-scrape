<template>
    <div class="article-wrapper">
        <h1 class="header-text text-white">NYT Scraper</h1>
        <h5 class="body-text text-white">This MEVN stack application was built by <a href="https://huntertrammell.github.io/" class="link-text">Hunter Trammell</a></h5>
        <form class="form-inline my-2 my-lg-0">
            <a class="btn btn-outline-info my-2 my-sm-0 header-text text-white" href="/api/scrape">Scrape Articles</a>
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
