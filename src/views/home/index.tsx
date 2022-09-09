import { useEffect } from 'react';
import { Button, Input } from 'antd';

export default function Home() {
  useEffect(() => {
    console.log(2222);
  }, []);

  return (
    <div>
      home
      <Button type="primary">点击</Button>
      <Input />
    </div>
  );
}
