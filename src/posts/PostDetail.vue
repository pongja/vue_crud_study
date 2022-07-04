<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.cotent }}</p>
    <p class="text-muted">{{ post.createdAt }}</p>
    <hr class="my-4" />
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">
          수정
        </button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger" @click="remove()">삭제</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { getPostByID, deletePost } from '@/apiPost/posts';
import { ref } from 'vue';
const route = useRoute();
const router = useRouter();
const id = route.params.id;
/**
 * ref 장점
 * 한꺼번에 객체할당가능
 */
const post = ref({
  title: null,
  content: null,
  createdAt: null,
});

const props = defineProps({
  id: String,
});

console.log('post:', getPostByID(props.id));

const fetchPost = async () => {
  try {
    const { data } = await getPostByID(props.id);
    setPost(data); //어떠한 데이터가 올줄모르니 정확한데이터를 받기위한 분해할당
  } catch (error) {
    console.log(error);
  }
};
const setPost = ({ title, content, createdAt }) => {
  //원하는 데이터
  post.value.title = title;
  post.value.content = content;
  post.value.createdAt = createdAt;
};
fetchPost();
const remove = async () => {
  try {
    if (confirm('삭제하시겠습니까?')) {
      await deletePost(props.id);
      router.push({ name: 'postList' });
    }
  } catch (error) {
    console.log(error);
  }
};
const goListPage = () =>
  router.push({
    name: 'postList',
  });
const goEditPage = () =>
  router.push({
    name: 'postEdit',
    params: { id },
  });
</script>

<style lang="scss" scoped></style>
