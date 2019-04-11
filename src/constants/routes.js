import Blogs from '../routes/blog/blog';
import Login from '../routes/login/login';
import IndexPage from '../routes/IndexPage';
import BlogDesc from '../routes/desc/desc';
// import Archive from '../components/archive/archive'
// import About from '../components/blog/about/about';
// import Collect from '../components/collect/collect'
export const routes = [{
  key: '首页',
  path: '/blog',
  component: Blogs
 

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
  path: '/blog/desc/:id',
  // path: '/',
  component: BlogDesc
}, {
  key: '文章收藏',
  // path: '/app/collect',
  path: '/',
  component: IndexPage
}, {
  key: '关于我',
  path: '/app/about',
  component: IndexPage
}, {
  key: '登录',
  path: '/login',
  component: Login
}];