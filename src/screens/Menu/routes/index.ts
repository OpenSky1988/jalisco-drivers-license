import { DEVICE_STORE_KEYS } from '../../../async-storage/deviceStoreKeys';
import i18n from '../../../locales/i18n';
import { IMenuRouteItem } from '../types';

const { t } = i18n;

const menuRoutes: IMenuRouteItem[] = [
  {
    title: 'ordered_quiz',
    to: 'Quiz',
    params: {
      quizType: DEVICE_STORE_KEYS.ORDERED,
      title: t('routes.ordered_quiz.title'),
    },
  },
  {
    title: 'randomized_quiz',
    to: 'Quiz',
    params: {
      quizType: DEVICE_STORE_KEYS.RANDOMIZED,
      title: t('routes.randomized_quiz.title'),
    },
  },
  {
    title: 'marathon',
    subtitle: 'marathon',
    to: 'Quiz',
    params: {
      quizType: DEVICE_STORE_KEYS.MARATHON,
      title: t('routes.marathon.title'),
    },
  },
  {
    title: 'mistakes',
    subtitle: 'mistakes',
    to: 'Quiz',
    params: {
      quizType: DEVICE_STORE_KEYS.MISTAKES,
      title: t('routes.mistakes.title'),
    },
  },
  {
    title: 'favorites',
    subtitle: 'favorites',
    to: 'Quiz',
    params: {
      quizType: DEVICE_STORE_KEYS.FAVORITES,
      title: t('routes.favorites.title'),
    },
  },
];

export default menuRoutes;
