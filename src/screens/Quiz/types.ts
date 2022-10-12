import { NativeStackScreenProps } from '@react-navigation/native-stack';

type TNavigationProps = NativeStackScreenProps<TRootStackParamList, 'Quiz'>;

interface IQuestion {
  id: number;
  img?: string;
  question: string;
  options: string[];
  correctOptionNumber: number;
}

export type { IQuestion, TNavigationProps };
