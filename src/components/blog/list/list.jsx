import React from 'react';
import {Row, Col, Tag, List, Icon} from 'antd';
import {color, timetrans} from '../../../utils/utils';
import SiderCustom from '../siderCustom/siderCustom';
import IconText from '../../common/iconText';
import './list.less'

const list = ({
  loading, 
  dataSource, 
  pagination, 
  searchWord,
  toTags,
  toCatalog,
  toDesc,
}) => {

  return (
    <div>
      <Row>
        <Col
          lg={{ span: 15, offset: 1 }}
          md={{ span: 15, offset: 1 }}
          xs={{ span: 24 }}
          className="list-wrapper"
        >
          <List
            itemLayout="vertical"
            size="large"
            pagination={pagination}
            dataSource={dataSource}
            renderItem={(item, index) => (
              <List.Item 
                key={item.title}
                actions={
                [ 
                  <IconText type="message" text={item.commentSize} />,
                  <IconText type="tags-o" text={
                    item.tags.split(',').map(v => (
                      <Tag
                        key={item.id + Math.random()}
                        color={color[Math.floor(Math.random()*color.length)]}
                        onClick={() => toTags(v)}
                      >
                        {v}
                      </Tag>
                  ))
                  } />,
                  item.catalogId ?
                  <IconText type="folder" text={
                    <Tag
                      color="orange"
                      key={item.catalogId}
                      onClick={() => toCatalog(item.catalogId)}
                    >
                      {item.catalogId}
                    </Tag>
                  }/> : null
                ]}
                extra={[
                  timetrans(item.createTime)
                ]} 
              >
                <List.Item.Meta
                  className="list-item"
                  title={item.title}
                  description={item.summary}
                  onClick={() => toDesc(item.id)}
                />
              </List.Item>
            )}
          />
        </Col>
        <Col
          lg={{ span: 6, offset: 1 }}
          md={{ span: 6, offset: 1 }}
          xs={{ span: 0 }}
        >
          <SiderCustom />
        </Col>

      </Row>
      <Row style={{marginTop: 20}}>
        <Col
          lg={{ span: 0 }}
          md={{ span: 0 }}
          xs={{ span: 24 }}
        >
          <SiderCustom />
        </Col>
      </Row>
    </div>
  );
};

export default list;