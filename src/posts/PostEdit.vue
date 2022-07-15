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
    <!-- <AppAlert :show="showAlert" :messeage="alertMessage" :type="alertType" /> -->
    <AppAlert :items="alerts" />
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { getPostByID, updataPost } from '@/apiPost/posts';
import { ref } from 'vue';
import PostForm from '@/components/posts/PostForm.vue';
import AppAlert from '@/components/AppAlert.vue';

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
    vAlert(error.message);
  }
};
const setForm = ({ title, content }) => {
  //원하는 데이터
  form.value.title = title;
  form.value.content = content;
};
fetchPost();
const edit = async () => {
  try {
    await updataPost(id, { ...form.value });
    vAlert('수정이 완료되었습니다.', 'success');
    router.push({ name: 'postDetail', params: { id } });
  } catch (error) {
    console.log(error);
    vAlert('수정실패!!');
  }
};
const goDetail = () =>
  router.push({
    name: 'postDetail',
    params: { id },
  });
//alert

const alerts = ref([]);
const vAlert = (message, type = 'error') => {
  alerts.value.push({ message, type });

  setTimeout(() => {
    alerts.value.shift();
  }, 2000);
};
</script>

<style scoped></style>
