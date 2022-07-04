<template>
  <div>
    <h2>게시글 리스트</h2>
    <form @submit.prevent="" class="mt-5">
      <div class="row g-3">
        <div class="col-5">
          <input v-model="params.title_like" type="text" class="form-control" />
        </div>
        <div class="col-2">
          <select v-model="params._limit" class="form-select">
            <option value="3">3개씩 보기</option>
            <option value="6">6개씩 보기</option>
            <option value="9">9개씩 보기</option>
          </select>
        </div>
      </div>
    </form>
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
    <nav class="mt-5" aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: !(params._page > 1) }">
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click.prevent="--params._page"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          v-for="page in pageCount"
          :key="page"
          class="page-item"
          :class="{ active: params._page === page }"
        >
          <a class="page-link" href="#" @click.prevent="params._page = page">{{
            page
          }}</a>
        </li>
        <li
          class="page-item"
          :class="{ disabled: !(params._page < pageCount) }"
        >
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click.prevent="++params._page"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
    <hr class="my-4" />
    <AppCard>
      <PostDetail :id="2"></PostDetail>
    </AppCard>
  </div>
</template>

<script setup>
import PostListitem from '@/components/posts/PostListitem.vue';
import PostDetail from '@/posts/PostDetail.vue';
import AppCard from '@/components/AppCard.vue';
import { getPosts } from '@/apiPost/posts';
import { ref, computed, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const posts = ref([]);
const params = ref({
  _sort: 'createdAt',
  _order: 'desc',
  _page: 1,
  _limit: 3,
  title_like: '',
});
//pagenation
const totalCount = ref(0);
const pageCount = computed(() =>
  Math.ceil(totalCount.value / params.value._limit),
);

const fetchPosts = async () => {
  try {
    const { data, headers } = await getPosts(params.value);
    posts.value = data;
    totalCount.value = headers['x-total-count'];
  } catch (error) {
    console.log(error);
  }
};
watchEffect(fetchPosts);
// fetchPosts();
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
