export default [{
  path: '/demo',
  name: 'demo',
  component: () => import('@/views/demo.vue'),
  meta: {
    title: '搜索',
  }
}]