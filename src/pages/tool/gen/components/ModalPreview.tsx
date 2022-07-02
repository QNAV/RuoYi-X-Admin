import { previewIdAtom } from '@/pages/tool/gen/model';
import { GenGetPreview } from '@/services/gen/GenService';
import { CopyOutlined } from '@ant-design/icons';
import { useRequest } from 'ahooks';
import { Button, message, Modal, Spin, Tabs } from 'antd';
import copy from 'copy-to-clipboard';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import type { FC } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';

const { TabPane } = Tabs;

const copyToClipboard = (text: string) => {
  copy(text);
  message.success('复制成功');
};

const ModalPreview: FC = () => {
  const onCancel = useResetRecoilState(previewIdAtom);
  const previewId = useRecoilValue(previewIdAtom);
  const visible = previewId > 0;

  const { data, loading } = useRequest(
    async () => {
      const data = await GenGetPreview({ tableId: previewId });

      return Object.keys(data).map((key) => ({
        tab: key,
        key,
        content: data[key],
        highlightContent: hljs.highlightAuto(data[key]).value,
      }));
    },
    {
      ready: visible,
      refreshDeps: [previewId],
    },
  );

  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      width="80%"
      footer={false}
      title="预览代码"
      bodyStyle={{ height: '700px' }}
    >
      <Spin spinning={loading}>
        <Tabs tabPosition="left">
          {data &&
            data.map(({ key, tab, content, highlightContent }) => (
              <TabPane tab={tab} key={key} className="relative">
                <Button
                  icon={<CopyOutlined />}
                  type="link"
                  className="absolute top-0 right-1"
                  onClick={() => copyToClipboard(content)}
                >
                  复制代码
                </Button>
                <pre>
                  <code>
                    <div className="h-[650px] overflow-auto" dangerouslySetInnerHTML={{ __html: highlightContent }} />
                  </code>
                </pre>
              </TabPane>
            ))}
        </Tabs>
      </Spin>
    </Modal>
  );
};

export default ModalPreview;
