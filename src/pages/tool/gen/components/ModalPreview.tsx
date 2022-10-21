import { useAtomValueSelectedTableId, useHidePreviewModal } from '@/pages/tool/gen/model';
import { GenGetPreview } from '@/services/gen/GenService';
import { CopyOutlined } from '@ant-design/icons';
import { useRequest } from 'ahooks';
import { Button, message, Modal, Spin, Tabs } from 'antd';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import type { FC } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const { TabPane } = Tabs;

const ModalPreview: FC = () => {
  const onCancel = useHidePreviewModal();
  const previewId = useAtomValueSelectedTableId();
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
      open={visible}
      onCancel={onCancel}
      width="80%"
      footer={false}
      title="预览代码"
      bodyStyle={{ height: '700px' }}
    >
      <Spin spinning={loading}>
        <Tabs tabPosition="left">
          {data?.map(({ key, tab, content, highlightContent }) => (
            <TabPane tab={tab} key={key} className="relative">
              <CopyToClipboard
                text={content}
                onCopy={(text, result) => {
                  if (result) {
                    message.success('复制成功');
                  }
                }}
              >
                <Button icon={<CopyOutlined />} type="link" className="absolute top-0 right-1">
                  复制代码
                </Button>
              </CopyToClipboard>

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
