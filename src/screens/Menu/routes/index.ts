import { DEVICE_STORE_KEYS } from '../../../async-storage/deviceStoreKeys';
import { IMenuRouteItem } from '../types';

const menuRoutes: IMenuRouteItem[] = [
  {
    title: 'ordered_quiz',
    to: 'Quiz',
    params: {
      quizType: DEVICE_STORE_KEYS.ORDERED,
      title: 'ordered_quiz',
    },
  },
  {
    title: 'randomized_quiz',
    to: 'Quiz',
    params: {
      quizType: DEVICE_STORE_KEYS.RANDOMIZED,
      title: 'randomized_quiz',
    },
  },
  {
    title: 'marathon',
    subtitle: 'marathon',
    to: 'Quiz',
    params: {
      quizType: DEVICE_STORE_KEYS.MARATHON,
      title: 'marathon',
    },
  },
  {
    title: 'mistakes',
    subtitle: 'mistakes',
    to: 'Quiz',
    params: {
      quizType: DEVICE_STORE_KEYS.MISTAKES,
      title: 'mistakes',
    },
  },
  {
    title: 'favorites',
    subtitle: 'favorites',
    to: 'Quiz',
    params: {
      quizType: DEVICE_STORE_KEYS.FAVORITES,
      title: 'favorites',
    },
  },
];

export default menuRoutes;
