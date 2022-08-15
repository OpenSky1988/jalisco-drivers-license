import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TRootStackParamList } from '../../App';

type TProps = NativeStackScreenProps<TRootStackParamList, 'Menu'>;

interface IMenuRouteItem {
  title: string;
  subtitle?: string;
  to: keyof TRootStackParamList;
  backgroundColor: string;
  params?: { [key: string]: unknown };
}

export type { TProps, IMenuRouteItem };
