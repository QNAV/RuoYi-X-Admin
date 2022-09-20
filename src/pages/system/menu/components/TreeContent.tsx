import { AntdIcon } from '@/components';
import { menuTypeColor } from '@/pages/system/menu/components/TreeMenu';
import { CopyOutlined } from '@ant-design/icons';
import type { TreeProps } from 'antd';
import { message, Space, Tag } from 'antd';
import copy from 'copy-to-clipboard';

const TreeContent: TreeProps<API.SysMenu>['titleRender'] = (item) => {
  return (
    <>
      <Tag color="rgb(148 163 184)">{item.orderNum}</Tag>

      {item?.icon && <AntdIcon name={item.icon} className="mr-1" />}

      <Tag color={menuTypeColor[item.menuType]} style={{ margin: '0 0 2px 0' }}>
        {item.menuName}
      </Tag>

      {item?.perms && (
        <Tag style={{ margin: '0 0 2px 2px' }}>
          <Space size="small">
            {item.perms}
            <CopyOutlined
              style={{ color: '#1890ff' }}
              onClick={(e) => {
                copy(item.perms!);
                message.success('复制成功');
                e.stopPropagation();
              }}
            />
          </Space>
        </Tag>
      )}
    </>
  );
};

export default TreeContent;
