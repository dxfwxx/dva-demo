import React from 'react';
import PropTypes from 'prop-types';
import {Table, Popconfirm, Button, Row, Col, IconText, List} from 'antd';

function BlogList({onDelete, dataSource, loading, pagination }) {
    console.log(dataSource);
    const columns = [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Actions',
        render: (text, record) => {
            return (
                <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
                    <Button>delete</Button>
                </Popconfirm>
            )
        }
    }
    ];
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
              renderItem={item => (
                <List.Item
                  key={item.title}
                  actions={
                  [ 
                    <IconText type="message" text={item.commentSize} />,
                    // <IconText type="tags-o" text={
                    //   item.tags.split(',').map(v => (
                    //     <Tag
                    //       key={item.id + Math.random()}
                    //       color={color[Math.floor(Math.random()*color.length)]}
                    //       onClick={()=>this.props.history.push(`/app/tags/${v}`)}
                    //     >
                    //       {v}
                    //     </Tag>
                    // ))
                    // } />,
                    // item.catalog ?
                    // <IconText type="folder" text={
                    //   <Tag
                    //     color="orange"
                    //     key={item.catalog.id}
                    //     onClick={()=>this.props.history.push(`/app/catalog/${item.catalog.id}`)}
                    //   >
                    //     {item.catalog.name}
                    //   </Tag>
                    // }/> : null
                  ]}
                  // extra={[
                  //   timetrans(item.created_at)
                  // ]}
                >
                  <List.Item.Meta
                    className="list-item"
                    title={item.title}
                    description={item.summary}
                    // onClick={()=>this.props.history.push(`/app/blog/desc/${item.id}`)}
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
            {/* <SiderCustom /> */}
          </Col>

        </Row>
        <Row style={{marginTop: 20}}>
          <Col
            lg={{ span: 0 }}
            md={{ span: 0 }}
            xs={{ span: 24 }}
          >
            {/* <SiderCustom /> */}
          </Col>
        </Row>
      </div>
    )
};
BlogList.propTypes = {
    onDelete: PropTypes.func.isRequired,
    // onCreate: PropTypes.func.isRequired,
    // onUpdate: PropTypes.func.isRequired,
    // onView: PropTypes.func.isRequired,
    dataSource: PropTypes.array.isRequired,
    pagination: PropTypes.object,
    loading: PropTypes.object,
  };

  export default BlogList;