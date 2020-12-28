<template>
  <div class="news">
    <Detail />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Detail from '@/components/NewsDetail.vue';

export default defineComponent({
  name: 'NewsDetail',
  components: {
    Detail,
  },
});
</script>
