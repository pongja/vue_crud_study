<template>
  <div>
    <h2>게시글 리스트</h2>
    <hr class="my-4" />
    <div class="row g-3">
      <div v-for="post in posts" :key="post.id" class="col-4">
        <PostListitem
          :title="post.title"
          :content="post.content"
          :created-at="post.createdAt"
          @click="goDetail(post.id)"
        ></PostListitem>
      </div>
    </div>
    <hr class="my-4" />
    <AppCard>
      <PostDetail :id="1"></PostDetail>
    </AppCard>
  </div>
</template>

<script setup>
import PostListitem from '@/components/icons/posts/PostListitem.vue';
import PostDetail from '@/posts/PostDetail.vue';
import AppCard from '@/components/AppCard.vue';
import { getPosts } from '@/apiPost/posts';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const posts = ref({});

const fetchPosts = async () => {
  try {
    const { data } = await getPosts();
    posts.value = data;
  } catch (error) {
    console.log(error);
  }
};
fetchPosts();
const goDetail = id => {
  // router.push(`/posts/${id}`);
  router.push({
    name: 'postDetail',
    params: {
      id,
    },
  });
};
</script>

<style lang="scss" scoped></style>
