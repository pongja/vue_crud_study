<template>
  <div>
    <h2>Home view</h2>
    <p>{{ $route.path }}</p>
    <button class="btn btn-primary" @click="Aboutpage">About으로 이동</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const Aboutpage = () => {
  router.push('/about');
};
</script>

<style lang="scss" scoped></style>
