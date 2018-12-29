<template>
  <div>
    <app-navbar />
    <div class="row">
      <app-article-wrapper class="col-10 px-0"/>
      <app-right-article class="col-2"/>
    </div>
  </div>
</template>

<script>
import ArticleWrapper from '@/components/ArticleWrapper.vue'
import Navbar from '@/components/Navbar.vue'
import RightArticle from '@/components/RightArticle.vue'
export default {
  name: 'home',
  components: {
    appArticleWrapper: ArticleWrapper,
    appNavbar: Navbar,
    appRightArticle: RightArticle
  }
}
</script>
