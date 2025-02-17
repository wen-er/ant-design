import React from 'react';
import { Select, Space } from 'antd';

const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};

const options = [
  {
    label: 'China',
    value: 'china',
    //emoji: '🇨🇳',
    desc: 'China (企微消息)',
  },
  {
    label: 'USA',
    value: 'usa',
    //emoji: '🇺🇸',
    desc: 'USA (腾讯会议)',
  },

];

const App: React.FC = () => (
  <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="select one country"
    defaultValue={['china']}
    onChange={handleChange}
    options={options}
    optionRender={(option) => (
      <Space>
        <span role="img" aria-label={option.data.label}>
          {option.data.emoji}
        </span>
        {option.data.desc}
      </Space>
    )}
  />
);

export default App;
