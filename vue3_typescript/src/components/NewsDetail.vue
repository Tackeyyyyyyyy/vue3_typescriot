<template>
  <div class="l-contents thin">
    <main>
      <h1>{{ news.title }}</h1>
      <div class="summary">
        <span>お知らせ | {{ dateFormat(news.postDate) }}</span>
      </div>
      <div class="m_text textBlock" >
        <span v-html="news.text"></span>
      </div>
      <div class="m_text textBlock" >
        <router-link :to="{ name: 'News'}">お知らせ一覧</router-link>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import News from '@/models/news'
import {getNews} from "@/api/news_api";
import { dateFormat } from '@/components/dateFilter'

export default defineComponent({
  setup () {
    return {
      dateFormat
    }
  },
  data() {
    return {
      news: News
    }
  },
  async created() {
    const id = Number(this.$route.params.id)
    const newsList = await getNews()
    const news: any = newsList.find(
        item => item.id == id
    );
    if (news == undefined) {
      this.$router.push({ name: 'News' })
      return
    }
    this.news = news
  },
  name: 'NewsDetail',
});
</script>
