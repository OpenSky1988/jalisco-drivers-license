import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TRootStackParamList } from '../../App';

type TProps = NativeStackScreenProps<TRootStackParamList, 'Menu'>;

interface IRouteItem {
  text: string;
  to: keyof TRootStackParamList;
  params?: { [key: string]: unknown };
}

export type { TProps, IRouteItem };
