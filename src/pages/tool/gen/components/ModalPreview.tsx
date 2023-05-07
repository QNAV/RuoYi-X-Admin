import { Access } from '@/components';
import { useAtomValuePreviewModal, useHidePreviewModal } from '@/pages/tool/gen/model';
import { genGetPreview } from '@/services/gen/Tool';
import { CopyOutlined } from '@ant-design/icons';
import { useRequest } from 'ahooks';
import { App, Button, Modal, Spin, Tabs } from 'antd';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import type { FC } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ModalPreview: FC = () => {
  const onCancel = useHidePreviewModal();
  const { open, previewId } = useAtomValuePreviewModal();

  const { message } = App.useApp();

  const { data, loading } = useRequest(
    async () => {
      const data = await genGetPreview({ tableId: previewId! });

      return Object.keys(data).map((key) => ({
        key,
        content: data[key],
        highlightContent: hljs.highlightAuto(data[key]).value,
      }));
    },
    {
      ready: open && !!previewId,
      refreshDeps: [previewId],
    },
  );

  return (
    <Access accessible>
      <Modal
        open={open}
        onCancel={onCancel}
        width="90%"
        footer={false}
        title="预览代码"
        bodyStyle={{ height: '700px' }}
      >
        <Spin spinning={loading}>
          <Tabs
            tabPosition="left"
            items={
              data?.map(({ key, content, highlightContent }) => {
                return {
                  key,
                  label: key,
                  children: (
                    <div className="relative">
                      <CopyToClipboard
                        text={content}
                        onCopy={(_text, result) => {
                          if (result) {
                            message.success('复制成功');
                          }
                        }}
                      >
                        <Button icon={<CopyOutlined />} type="link" className="absolute top-[-5px] right-2">
                          复制代码
                        </Button>
                      </CopyToClipboard>

                      <pre>
                        <code>
                          <div
                            className="h-[650px] overflow-auto"
                            dangerouslySetInnerHTML={{ __html: highlightContent }}
                          />
                        </code>
                      </pre>
                    </div>
                  ),
                };
              }) ?? []
            }
          />
        </Spin>
      </Modal>
    </Access>
  );
};

export default ModalPreview;
