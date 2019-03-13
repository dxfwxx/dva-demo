import {Row, BackTop, Col, Card, Tag} from 'antd';
import Navigation from 'antd';
import IconText from '../../common/iconText';
import {color, timetrans} from '../../../utils/utils';
import marked from 'marked';

const Desc =({
  author,
  date,
  title,
  content,
  readSize,
  tags,
}) => {
  return (
    <Row>
      <BackTop visibilityHeight={300}/>
      <Col
        lg={{ span: 15, offset: 1 }}
        md={{ span: 15, offset: 1 }}
        xs={{ span: 24 }}
      >
        <Card
          className="article-wrapper"
          title={title}
          extra={[
            <Tag color="red" key="author">
              作者：admin
            </Tag>,
            <span style={{marginTop: 10}} key="time">
              {
                date
                ? timetrans(date)
                : null
              }
            </span>
          ]}
        >
          <div className="article-tags">
            <span>{readSize} 次浏览</span>
            <IconText type="tags-o" text={
              tags.split(',').map(v => (
                <Tag
                  key={v}
                  color={color[Math.floor(Math.random()*color.length)]}
                  onClick={()=>{}}
                >
                  {v}
                </Tag>
              ))}
            />
          </div>
          <div 
            className="article-detail" 
            dangerouslySetInnerHTML={{ __html: content ? marked(content) : null }} 
          />
        </Card>
        {/* <Comment /> */}
      </Col>
      <Col
        lg={{ span: 6, offset: 1 }}
        md={{ span: 6, offset: 1 }}
        xs={{ span: 0 }}
      >
        {
          content ?
          <Card title="目录" className="catalog">
            <Navigation 
              content={content}
            />
          </Card>
          : null
        }
      </Col>
    </Row>
  )
};

export default Desc;