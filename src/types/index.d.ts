import type { GetUserInfoResponse, UserRoute } from '@/services';

export interface InitialState {
  userInfo: GetUserInfoResponse;
  userRoutes: UserRoute[];
}

export type MapValueEnum<K> = Map<
  K,
  { text: string; status?: 'Default' | 'Error' | 'Success' | 'Processing' | 'Warning' }
>;
