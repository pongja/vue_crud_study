<template>
  <div>
    <h2>게시글 리스트</h2>
    <hr class="my-4" />
    <PostFilter
      v-model:title="params.title_like"
      v-model:limit="params._limit"
    />
    <hr class="my-4" />
    <AppGrid :items="posts">
      <template v-slot="{ item }">
        <PostListitem
          :title="item.title"
          :content="item.content"
          :created-at="item.createdAt"
          @click="goDetail(item.id)"
          @modal="openModal(item)"
        ></PostListitem>
      </template>
    </AppGrid>
    <AppPagination
      :current-page="params._page"
      :page-count="pageCount"
      @page="page => (params._page = page)"
    />
    <Teleport to="#modal">
      <PostModal
        v-model="show"
        :title="modalTitle"
        :content="modalContent"
        :createdAt="modalCreatedAt"
      />
    </Teleport>
    <template v-if="posts && posts.length > 0">
      <hr class="my-4" />
      <AppCard>
        <PostDetail :id="posts[0].id"></PostDetail>
      </AppCard>
    </template>
  </div>
</template>

<script setup>
import PostListitem from '@/components/posts/PostListitem.vue';
import PostDetail from '@/posts/PostDetail.vue';
import AppCard from '@/components/AppCard.vue';
import AppPagination from '@/components/AppPagination.vue';
import { getPosts } from '@/apiPost/posts';
import { ref, computed, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import AppGrid from '@/components/AppGrid.vue';
import PostFilter from '@/components/posts/PostFilter.vue';
import PostModal from '@/components/posts/PostModal.vue';

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
//modal
const show = ref(false);
const modalTitle = ref('');
const modalContent = ref('');
const modalCreatedAt = ref('');
const openModal = ({ title, content, createdAt }) => {
  show.value = true;
  modalTitle.value = title;
  modalContent.value = content;
  modalCreatedAt.value = createdAt;
};
</script>

<style lang="scss" scoped></style>
