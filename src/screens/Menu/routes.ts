import { COLORS } from '../../constants';
import { IMenuRouteItem } from './types';

const menuRoutes: IMenuRouteItem[] = [
  {
    title: 'Ordered Quiz',
    subtitle: `Successfull attempts: ${1}`,
    to: 'Quiz',
    backgroundColor: COLORS.success,
  },
  {
    title: 'Randomized Quiz',
    subtitle: `Successfull attempts: ${1}`,
    to: 'Quiz',
    backgroundColor: COLORS.accent,
    params: {
      isRandom: true,
    },
  },
  {
    title: 'Mistakes',
    subtitle: 'Work them through',
    to: 'Quiz',
    backgroundColor: COLORS.error,
    params: {
      isWrongAnswers: true,
    },
  },
];

export default menuRoutes;
