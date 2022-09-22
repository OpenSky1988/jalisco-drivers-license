import { DEVICE_STORE_KEYS } from '../../async-storage/deviceStoreKeys';
import { COLORS } from '../../constants';
import { IMenuRouteItem } from './types';

const menuRoutes: IMenuRouteItem[] = [
  {
    title: 'Ordered Quiz',
    to: 'Quiz',
    backgroundColor: COLORS.success,
    params: {
      quizType: DEVICE_STORE_KEYS.ORDERED,
      title: 'Ordered Quiz',
    },
  },
  {
    title: 'Randomized Quiz',
    to: 'Quiz',
    backgroundColor: COLORS.accent,
    params: {
      quizType: DEVICE_STORE_KEYS.RANDOMIZED,
      title: 'Randomized Quiz',
    },
  },
  {
    title: 'Marathon',
    subtitle: 'Answer within 20 seconds',
    to: 'Quiz',
    backgroundColor: COLORS.black,
    params: {
      quizType: DEVICE_STORE_KEYS.MARATHON,
      title: 'Marathon',
    },
  },
  {
    title: 'Mistakes',
    subtitle: 'Work them through',
    to: 'Quiz',
    backgroundColor: COLORS.error,
    params: {
      quizType: DEVICE_STORE_KEYS.MISTAKES,
      title: 'Mistakes',
    },
  },
  {
    title: 'Favorites',
    subtitle: 'Your own selection',
    to: 'Quiz',
    backgroundColor: COLORS.success,
    params: {
      quizType: DEVICE_STORE_KEYS.FAVORITES,
      title: 'Favorites',
    },
  },
];

export default menuRoutes;
