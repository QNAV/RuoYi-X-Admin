import type { GetUserInfoResponse, UserRoute } from '@/services';
import type { ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';

export interface InitialState {
  userInfo: GetUserInfoResponse;
  userRoutes: UserRoute[];
}

export type MapValueEnum<K> = Map<
  K,
  { text: string; status?: 'Default' | 'Error' | 'Success' | 'Processing' | 'Warning' }
>;

export type ProItem<T = any, ValueType = 'text'> = ProDescriptionsItemProps<T, ValueType> & ProColumns<T, ValueType>;
