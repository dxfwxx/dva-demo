import {Card, Tag} from 'antd';
import {color} from '../../../utils/utils'
import avatar from '../../../assets/avatar.jpg'
import './sider.less';

const SiderCustom = ({
  dataSource,
  toTags,
  toDesc,
}) => {
  
  return (
    <div className="sider-container">
      <div className="admin-info">
        <header>
          <img src={avatar} alt="avatar"/>
        </header>
        <p className="admin-name">
          Water
        </p>
        <p className="admin-desc">
          二次元，业余摄影，前端打杂人员，略微代码洁癖
        </p>
      </div>
      <div className="recent-article">
        <Card title="最近文章" bordered={false}>
          {
            dataSource ? <ul className="recent-list">
              {
                dataSource.map(v => (
                    <li key={v.id} onClick={() => this.props.history.push(`/app/blog/desc/${v.id}`)}>
                      {v.title}
                    </li>
                ))
              }
            </ul>
            : null
          }
        </Card>
      </div>
      <div className="tags-wrapper">
        <Card title="标签" bordered={false}>
          <div className="tags-content">
            {
              dataSource ?
                dataSource.map(v => (
                  <Tag
                    key = {v}
                    color={color[Math.floor(Math.random()*color.length)]}
                    onClick={()=>this.props.history.push(`/app/tags/${v}`)}
                  >
                    {v}
                  </Tag>
                ))
              : null
            }
          </div>
        </Card>
      </div>
    </div>
  ) 
};

export default SiderCustom;