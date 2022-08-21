import { DEVICE_STORE_KEYS } from '../../async-storage/deviceStoreKeys';
import { COLORS } from '../../constants';
import { IMenuRouteItem } from './types';

const menuRoutes: IMenuRouteItem[] = [
  {
    title: 'Ordered Quiz',
    to: 'Quiz',
    backgroundColor: COLORS.success,
    params: {
      testTypeKey: DEVICE_STORE_KEYS.ORDERED,
    },
  },
  {
    title: 'Randomized Quiz',
    to: 'Quiz',
    backgroundColor: COLORS.accent,
    params: {
      testTypeKey: DEVICE_STORE_KEYS.RANDOMIZED,
    },
  },
  {
    title: 'Mistakes',
    subtitle: 'Work them through',
    to: 'Quiz',
    backgroundColor: COLORS.error,
    params: {
      testTypeKey: DEVICE_STORE_KEYS.MISTAKES,
    },
  },
];

export default menuRoutes;
