import React from 'react';
import {routerRedux} from 'dva/router';
import Desc from '../../components/blog/desc/desc';
import HeaderCustom from '../../components/headers/headerCustom'
import { connect } from 'dva';
import { Layout } from 'antd';
import '../blog/blog.less';
const { Content, Footer } = Layout;

const BlogDesc = ({desc, dispatch}) => {
  const { 
    id,
    title, 
    author,
    date,
    content,
    tags } = desc;
  const contentHeight = document.body.clientHeight - 64 -62; 
  const blogDescProps = {
    id,
    title, 
    author,
    date,
    content,
    tags,
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
          pathname: '/desc',
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
            <Desc {...blogDescProps} />
          </Content>
        </Layout>
      </Layout>
      
    </div>
  );
};

export default connect(({desc}) => ({
  desc,
}))(BlogDesc);