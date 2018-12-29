<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <router-link class="navbar-brand text-white header-text" to="/">NYT Scraper</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <form class="form-inline my-2 my-lg-0">
                <button class="btn btn-outline-info my-2 my-sm-0 header-text text-white">Scrape Articles</button>
            </form>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>

<style>
    .navbar {
        opacity: 0.90 !important;
    }
    nav {
        height: 5vh;
    }
</style>

