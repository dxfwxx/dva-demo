import React from 'react';
// import BlogList from '../../components/blog/blogList';
import HeaderCustom from '../../components/headers/headerCustom'
import { connect } from 'dva';
import { Route } from 'react-router-dom'
import { Layout } from 'antd';
import { routes } from '../../constants/routes'
import './blog.less';
const { Content, Footer } = Layout;

const Blogs = ({dispatch, blogs}) => {
  const { loading, list, pagination,searchWord } = blogs;
  const contentHeight = document.body.clientHeight - 64 -62;

  const blogListProps = {
    blogListProps,
    dataSource: list,
    loading,
    pagination,
    // onDelete(id) {
    //   dispatch({
    //     type: 'blogs/delete',
    //     payload: id,
    //   })
    // },
    // onQuery(page) {
    //   dispatch({
    //     type: 'blogs/query',
    //     payload: {
    //       page: page.current,
    //       rows: page.pageSize,
    //       queryString: searchWord,
    //     },
    //   });
    // }
  }
  return (
    <div className="wrapper">
      <HeaderCustom></HeaderCustom>
      <Layout className="wrapper-container">
        <Layout className="wrapper-content">
          <Content
              style={{ padding: 24, margin: 0, minHeight: contentHeight, height: '100%', overflow: 'initial'}}
          >
            {
              routes.map(({path, key, component, ...blogListProps}) => (
                <Route key={key}
                  exact path={path}
                  component={component} 
                  {...blogListProps} />
                  
              ))
            } 
          </Content>
        </Layout>
      </Layout>
      {/* <h2> list of BlogList </h2> */}
      {/* <BlogList {...blogListProps} /> */}
    </div>
  );
};

export default connect(({blogs}) => ({
  blogs,
}))(Blogs);