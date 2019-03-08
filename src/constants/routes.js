import BlogList from '../components/blog/blogList'
// import Desc from '../components/desc/desc'
// import Archive from '../components/archive/archive'
import About from '../components/blog/about/about'
// import Collect from '../components/collect/collect'
import IndexPage from '../routes/IndexPage';
export const routes = [{
  key: '首页',
  // path: '/app/index',
  path: '/',
  component: IndexPage
}, {
  key: '标签搜索',
  // path: '/app/tags/:tags',
  path: '/',
  component: IndexPage
}, {
  key: '分类搜索',
  // path: '/app/catalog/:catalog',
  path: '/',
  component: IndexPage
}, {
  key: '归档',
  // path: '/app/archive',
  path: '/',
  component: IndexPage
}, {
  key: '博客详情',
  // path: '/app/blog/desc/:id',
  path: '/',
  component: IndexPage
}, {
  key: '文章收藏',
  // path: '/app/collect',
  path: '/',
  component: IndexPage
}, {
  key: '关于我',
  path: '/app/about',
  component: About
}]