<template>
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4" />
    <PostForm
      v-model:title="form.title"
      v-model:content="form.content"
      @submit.prevent="edit"
    >
      <template #actions>
        <button type="button" class="btn btn-outline-danger" @click="goDetail">
          취소
        </button>
        <button class="btn btn-primary">수정</button>
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { getPostByID, updataPost } from '@/apiPost/posts';
import { ref } from 'vue';
import PostForm from '@/components/posts/PostForm.vue';

const route = useRoute();
const router = useRouter();

const id = route.params.id;

const form = ref({
  title: null,
  content: null,
});
const fetchPost = async () => {
  try {
    const { data } = await getPostByID(id);
    setForm(data); //어떠한 데이터가 올줄모르니 정확한데이터를 받기위한 분해할당
  } catch (error) {
    console.log(error);
  }
};
const setForm = ({ title, content, createdAt }) => {
  //원하는 데이터
  form.value.title = title;
  form.value.content = content;
  form.value.createdAt = createdAt;
};
fetchPost();
const edit = async () => {
  try {
    await updataPost(id, { ...form.value });
    router.push({ name: 'postDetail', params: { id } });
  } catch (error) {
    console.log(error);
  }
};
const goDetail = () =>
  router.push({
    name: 'postDetail',
    params: { id },
  });
</script>

<style lang="scss" scoped></style>
