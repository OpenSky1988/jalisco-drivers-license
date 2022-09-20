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
    title: 'Marathon',
    subtitle: 'Answer within 20 seconds',
    to: 'Quiz',
    backgroundColor: COLORS.black,
    params: {
      testTypeKey: DEVICE_STORE_KEYS.MARATHON,
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
  {
    title: 'Favorites',
    subtitle: 'Your own selection',
    to: 'Quiz',
    backgroundColor: COLORS.success,
    params: {
      testTypeKey: DEVICE_STORE_KEYS.FAVORITES,
    },
  },
];

export default menuRoutes;
