import { BasePageContainer } from '@/components';
import { Button } from 'antd';
import { useState } from 'react';

const PageDemo1 = () => {
  const [c, setC] = useState(0);
  return (
    <BasePageContainer>
      <Button onClick={() => setC((v) => v + 1)}>+</Button>
      {c}
    </BasePageContainer>
  );
};

export default PageDemo1;
