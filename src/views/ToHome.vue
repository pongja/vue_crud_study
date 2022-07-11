<template>
  <div>
    <h2>Home view</h2>
    <p>{{ $route.path }}</p>
    <button class="btn btn-primary" @click="Aboutpage">About으로 이동</button>
    <hr class="my-4" />
    <AppGrid :items="items" v-slot="{ item }" col-class="col-3">
      <AppCard>{{ item }}</AppCard>
    </AppGrid>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import AppCard from '@/components/AppCard.vue';
import AppGrid from '@/components/AppGrid.vue';

const router = useRouter();
const Aboutpage = () => {
  router.push('/about');
};

const items = ref(['사과', '딸기', '포도', '바나나']);
</script>

<style lang="scss" scoped></style>
