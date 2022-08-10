import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { TRootStackParamList } from '../../App';

type TNavigationProps = NativeStackScreenProps<TRootStackParamList, 'Quiz'>;

interface IQuestion {
  id: number;
  img?: string;
  question: string;
  options: string[];
  correct_option: string;
}

export type { IQuestion, TNavigationProps };
