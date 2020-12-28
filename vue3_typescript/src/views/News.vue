<template>
  <div class="news">
    <NewsList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NewsList from '@/components/NewsList.vue';  // @ is an alias to /src

export default defineComponent({
  name: 'News',
  components: {
    NewsList,
  },
});
</script>
