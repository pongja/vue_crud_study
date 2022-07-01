<template>
  <div>
    <h2>About view</h2>
    <p>{{ $route.path }}</p>
    <button class="btn btn-primary" @click="$router.push('/')">
      Home으로 이동
    </button>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log('route.path: ', route.path); //라우터현재경로찍기
</script>

<style lang="scss" scoped></style>
