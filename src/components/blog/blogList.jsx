import React from 'react';
import PropTypes from 'prop-types';
import {Table, Popconfirm, Button} from 'antd';

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
        <Table dataSource={dataSource}
            columns={columns} />
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