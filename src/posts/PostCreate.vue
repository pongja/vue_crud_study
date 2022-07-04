<template>
  <div>
    <h2>게시글등록</h2>
    <hr class="my-4" />
    <PostForm
      v-model:title="form.title"
      v-model:content="form.content"
      @submit.prevent="formCreate"
    >
      <template #actions>
        <button
          type="button"
          class="btn btn-outline-dark me-2"
          @click="goListPage"
        >
          목록
        </button>
        <button class="btn btn-primary">저장</button>
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { createPost } from '@/apiPost/posts';
import PostForm from '@/components/posts/PostForm.vue';

const router = useRouter();
const form = ref({
  title: null,
  content: null,
});
const formCreate = () => {
  try {
    createPost({
      ...form.value,
      createdAt: Date.now(),
    });
    router.push({ name: 'postList' });
  } catch (error) {
    console.log(error);
  }
};
const goListPage = () =>
  router.push({
    name: 'postList',
  });
</script>

<style lang="scss" scoped></style>
