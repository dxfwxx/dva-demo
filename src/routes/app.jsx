import React from 'react'
import HeaderCustom from '../components/headers/headerCustom';
import { Layout } from 'antd';
import { connect } from 'dva';
import './blog/blog.less';
const { Content, Footer } = Layout;

const contentHeight = document.body.clientHeight - 64 -62;
const App = ({children}) => {
  return (
    <div className="wrapper">
      <HeaderCustom></HeaderCustom>
        <Layout className="wrapper-container">
          <Layout className="wrapper-content">
            <Content style={{ padding: 24, margin: 0, minHeight: contentHeight, height: '100%', overflow: 'initial'}} >
              {children || 'Hello world'}
            </Content>
          </Layout>
      </Layout>
    </div>
  )
}
export default connect(({app}) => ({
  app,
}))(App);