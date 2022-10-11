import type { ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';

export type ProItem<T = any, ValueType = 'text'> = ProDescriptionsItemProps<T, ValueType> & ProColumns<T, ValueType>;
