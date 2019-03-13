import React from 'react';
import {routerRedux} from 'dva/router';
import BlogList from '../../components/blog/list/list';
import { Route } from 'react-router-dom';
import HeaderCustom from '../../components/headers/headerCustom'
import { routes } from '../../constants/routes';
import { connect } from 'dva';
import { Layout } from 'antd';
import './blog.less';
const { Content, Footer } = Layout;

const Blogs = ({blogs, dispatch}) => {
  const { loading, dataSource, pagination, searchWord } = blogs;
  const contentHeight = document.body.clientHeight - 64 -62;
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
      dispatch(
        routerRedux.push({
          pathname: '/blog/desc',
          state: {
            id
          },
        }),
      );
    }
  }
  return (
    <div className="wrapper">
      <HeaderCustom></HeaderCustom>
      <Layout className="wrapper-container">
        <Layout className="wrapper-content">
          <Content
              style={{ padding: 24, margin: 0, minHeight: contentHeight, height: '100%', overflow: 'initial'}}
          >
            <BlogList {...blogListProps} />
            {/* {
                routes.map(({ path, key, component, ...props }) => (
                  <Route key={key}
                    exact
                    path={path}
                    component={component}
                    {...props}
                  />
                ))
              } */}
          </Content>
        </Layout>
      </Layout>
      
    </div>
  );
};

export default connect(({blogs}) => ({
  blogs,
}))(Blogs);