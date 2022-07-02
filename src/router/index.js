import { createRouter, createWebHistory } from 'vue-router';
import ToHome from '@/views/ToHome.vue';
import ToAbout from '@/views/ToAbout.vue';
import PostCreate from '@/posts/PostCreate.vue';
import PostDetail from '@/posts/PostDetail.vue';
import PostEdit from '@/posts/PostEdit.vue';
import PostList from '@/posts/PostList.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import NestedView from '@/views/Nested/NestedView.vue';
import NestedOneView from '@/views/Nested/NestedOneView.vue';
import NestedTwoView from '@/views/Nested/NestedTwoView.vue';
import NestedHomeView from '@/views/Nested/NestedHomeView.vue';

const routes = [
  {
    path: '/',
    component: ToHome,
  },
  {
    path: '/about',
    name: 'About',
    component: ToAbout,
  },
  {
    path: '/posts',
    name: 'postList',
    component: PostList,
  },
  {
    path: '/posts/create',
    name: 'postCreate',
    component: PostCreate,
  },
  {
    path: '/posts/:id',
    name: 'postDetail',
    component: PostDetail,
    props: true,
  },
  {
    path: '/posts/:id/edit',
    name: 'postEdit',
    component: PostEdit,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
  },
  {
    path: '/nested',
    name: 'Nested',
    component: NestedView,
    children: [
      //중첩 자식라우팅
      {
        path: '',
        name: 'NestedHome',
        component: NestedHomeView,
      },
      {
        path: 'one',
        name: 'NestedOne',
        component: NestedOneView,
      },
      {
        path: 'two',
        name: 'NestedTwo',
        component: NestedTwoView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
