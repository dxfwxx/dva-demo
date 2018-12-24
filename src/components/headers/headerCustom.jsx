import React, { Component } from 'react'
import { 
  Layout,
  Row,
  Col,
  Button,
  Dropdown,
  Avatar,
  Icon
} from 'antd'
import Cookies from 'js-cookies'
import Navigate from '../menu'
import {menus} from '../../constants/menus'
import './header.less'
const { Header } = Layout

const HeaderCustom = ({isLogin, dispatch}) => {
  const navigator = (
    <Navigate
      menus={menus}
      onClick={this.menuClick}
      style={{width: 90, borderRadius: '5%'}}
    />
  );
    return (
        <Header className="header-container">
          <Row>
            <Col 
              lg={{span: 4}}
              md={{span: 4}}
              xs={{span: 0}}
            >
              <div className="logo">
              </div>
            </Col>
            <Col 
              lg={{span: 14}}
              md={{span: 14}}
              xs={{span: 0}}
            >
              <Navigate
                menus={menus}
                mode="horizontal"
              />
            </Col>
            <Col
              lg={{span: 0}}
              md={{span: 0}}
              xs={{span: 10}}
              className="drop-down"
            >
               <Dropdown overlay={navigator} trigger={['click']}>
                  <div>
                    <Button type="primary" ghost style={{border: 'none'}}>
                      {'首页'}<Icon type="caret-down" />
                    </Button>
                  </div>
               </Dropdown>
            </Col>
            <Col 
              lg={{span: 6}}
              md={{span: 6}}
              xs={{span: 14}}
            >
              <div 
                className="nav-auth"
                // style={{display: Cookies.get("token") ? 'none' : 'block'}}
                style={{dispaly: 'block'}}
              >
                <Button 
                  ghost 
                  type="primary" 
                  size="small" 
                  style={{marginRight: 20}}
                  onClick={this.showLoginModal}
                >
                  登录
                </Button>
                <Button 
                  ghost 
                  type="danger" 
                  size="small"
                  onClick={this.showRegisterModal}
                >
                  注册
                </Button>
              </div>
  
              {/* <div 
                className="user-info"
                // style={{display: Cookies.get("token") ? 'flex' : 'none'}}
                style={{dispaly: 'block'}}
              >
                <Dropdown
                  placement="bottomCenter"
                  overlay={menu}
                >
                  <Avatar
                    className="user-avatar"
                    shape="square" 
                    size="large"
                    style={{backgroundColor: 'rgb(255, 191, 0)'}}
                  >
                    {Cookies.get("username") ? Cookies.get("username")[0] : null}
                  </Avatar>
                </Dropdown> 
              </div> */}
            </Col>
          </Row>
          {/* <Login
            visible={this.state.login}
            handleCancel={this.handleLoginCancel}
          /> */}
        </Header>
      )
}

export default HeaderCustom;