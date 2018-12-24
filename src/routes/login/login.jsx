import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button, Form, Icon, Input } from 'antd'
import { GlobalFooter } from 'ant-design-pro'
import config from '../../utils/config'
import styles from './login.less'
const FormItem = Form.Item

const LoginSys = ({dispatch, form: { getFieldDecorator, validateFields, getFieldsValue, resetFields, setFieldsValue } }) => {
  // const handleOk = (value) => {
  //   validateFields((err, values) => {
  //       if (!err) {
  //         console.log("111111" + values);
  //         dispatch({
  //           type: 'login/login',
  //           values,
  //         });
  //       }
  //     });
  // };
  function handleOk(){
    validateFields((err, values) => {
        if (!err) {
          dispatch({
            type: 'login/login',
            values,
          });
        }
      });
  };

  let footerLinks = [
    {
      key: 'github',
      title: <Icon type="github" />,
      href: 'https://github.com/zuiidea/antd-admin',
      blankTarget: true,
    },
  ]

  return (
    <Fragment>
      <div className={styles.form}>
        <div className={styles.logo}>
          <img alt="logo" src={config.logoPath} />
          <span>{config.siteName}</span>
        </div>
        <Form>
          <FormItem hasFeedback>
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                },
              ],
            })(
              <Input
                // onPressEnter={this.handleOk}
                placeholder={'Username'}
              />
            )}
          </FormItem>
          <FormItem hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                },
              ],
            })(
              <Input
                type="password"
                // onPressEnter={this.handleOk}
                placeholder={'Password'}
              />
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" onClick={handleOk}
              // loading={loading.effects.login}
            > Sign in
            </Button>
            <p>
              <span> Username：guest </span>
              <span> Password：guest </span>
            </p>
          </FormItem>
        </Form>
      </div>
      <div className={styles.footer}>
        <GlobalFooter links={footerLinks} copyright={config.copyright} />
      </div>
    </Fragment>
  )
}

function mapStateToProps(state) {
  return state.login;
}
export default connect(mapStateToProps)(Form.create()(LoginSys));