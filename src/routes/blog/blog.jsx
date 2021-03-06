import React from 'react';
import {routerRedux} from 'dva/router';
import BlogList from '../../components/blog/list/list';
import HeaderCustom from '../../components/headers/headerCustom'
import { connect } from 'dva';
import { Layout } from 'antd';
import './blog.less';
const { Content, Footer } = Layout;

const Blogs = ({blogs, dispatch}) => {
  const { loading, dataSource, pagination, searchWord } = blogs;
  console.log("____", blogs);
  const blogListProps = {
    dataSource,
    loading,
    pagination,
    searchWord,
    toTags(id) {
      dispatch(
        routerRedux.push({
          pathname: '/tags',
          state: {
            id
          },
        }),
      );
    },
    toCatalog(id) {
      dispatch(
        routerRedux.push({
          pathname: '/catalog',
          state: {
            id
          },
        }),
      );
    },
    toDesc(id) {
      dispatch({
        type: 'blogs/toDesc',
        payload: {
          id
        }
      });
    },
    onPageChange(page, pageSize) {
      dispatch({
        type: 'blogs/query',
        payload: {
          pageNum: 2,
          pageSize: pageSize,
        },
      });
    },
    onPageSizeChange(current, pageSize) {
      dispatch({
        type: 'blogs/query',
        payload: {
          pageNum: 1,
          pageSize,
        },
      });
    },
  }
  return (
    <div >
      {/* <HeaderCustom></HeaderCustom>
      <Layout className="wrapper-container">
        <Layout className="wrapper-content">
          <Content style={{ padding: 24, margin: 0, minHeight: contentHeight, height: '100%', overflow: 'initial'}} > */}
            <BlogList {...blogListProps} />
          {/* </Content>
        </Layout>
      </Layout> */}
      
    </div>
  );
};

export default connect(({blogs}) => ({
  blogs,
}))(Blogs);