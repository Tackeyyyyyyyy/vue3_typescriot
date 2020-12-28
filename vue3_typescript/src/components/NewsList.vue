<template>
  <div class="l-contents thin">
    <div class="l-header center">
      <div class="headerInner">
        <h1>お知らせ</h1>
      </div>
    </div>
    <main>
      <div class="m_newsList">
        <article v-for="content in news" :key="content.id">
          <i class="icon16 window"></i>
          <h1>
            <router-link :to="{ name: 'NewsDetail', params: { id: content.id }}">{{ content.title }}</router-link>
          </h1>
          お知らせ | {{ content.postDate.format('YYYY年MM月D日') }}
        </article>
      </div>
    </main>
  </div>
</template>


<script lang="ts">
import {defineComponent} from 'vue';
import News from '@/models/news'
import {getNews} from "@/api/news_api";

export default defineComponent({
  name: 'NewsList',
  data() {
    return {
      news: [] as News[]
    }
  },
  async created() {
    this.news = await getNews()
  },
});
</script>