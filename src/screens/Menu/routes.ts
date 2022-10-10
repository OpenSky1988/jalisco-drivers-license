import { DEVICE_STORE_KEYS } from '../../async-storage/deviceStoreKeys';
import { COLORS } from '../../constants';
import { IMenuRouteItem } from './types';
import i18n from '../../locales/i18n';

const { t } = i18n;

const menuRoutes: IMenuRouteItem[] = [
  {
    title: t('routes.ordered_quiz.title'),
    to: 'Quiz',
    backgroundColor: COLORS.success,
    params: {
      quizType: DEVICE_STORE_KEYS.ORDERED,
      title: t('routes.ordered_quiz.title'),
    },
  },
  {
    title: t('routes.randomized_quiz.title'),
    to: 'Quiz',
    backgroundColor: COLORS.accent,
    params: {
      quizType: DEVICE_STORE_KEYS.RANDOMIZED,
      title: t('routes.randomized_quiz.title'),
    },
  },
  {
    title: t('routes.marathon.title'),
    subtitle: t('routes.marathon.subtitle'),
    to: 'Quiz',
    backgroundColor: COLORS.black,
    params: {
      quizType: DEVICE_STORE_KEYS.MARATHON,
      title: t('routes.marathon.title'),
    },
  },
  {
    title: t('routes.mistakes.title'),
    subtitle: t('routes.mistakes.subtitle'),
    to: 'Quiz',
    backgroundColor: COLORS.error,
    params: {
      quizType: DEVICE_STORE_KEYS.MISTAKES,
      title: t('routes.mistakes.title'),
    },
  },
  {
    title: t('routes.favorites.title'),
    subtitle: t('routes.favorites.subtitle'),
    to: 'Quiz',
    backgroundColor: COLORS.success,
    params: {
      quizType: DEVICE_STORE_KEYS.FAVORITES,
      title: t('routes.favorites.title'),
    },
  },
];

export default menuRoutes;
