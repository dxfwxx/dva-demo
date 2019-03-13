import {Icon} from 'antd';

const IconText = ({
  type,
  text,
}) => {
   return (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
   )
}

export default IconText;