import { menuTypeColor } from '@/pages/system/menu/components/TreeMenu';
import type { SysMenuVo } from '@/services/system/data-contracts';
import { CopyOutlined } from '@ant-design/icons';
import type { TreeProps } from 'antd';
import { message, Space, Tag } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const TreeMenuTitle: TreeProps<SysMenuVo>['titleRender'] = (item) => {
  return (
    <>
      <Tag color="rgb(148 163 184)">{item.orderNum}</Tag>

      <Tag color={menuTypeColor[item.menuType]} style={{ margin: '0 0 2px 0' }}>
        {item.menuName}
      </Tag>

      {item?.perms && (
        <Tag style={{ margin: '0 0 2px 2px' }}>
          <Space size="small">
            {item.perms}
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <CopyToClipboard
                text={item.perms}
                onCopy={async (_text, result) => {
                  if (result) {
                    message.success('复制成功');
                  }
                }}
              >
                <CopyOutlined style={{ color: '#1890ff' }} />
              </CopyToClipboard>
            </div>
          </Space>
        </Tag>
      )}
    </>
  );
};

export default TreeMenuTitle;
