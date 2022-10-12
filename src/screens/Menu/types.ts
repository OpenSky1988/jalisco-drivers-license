import { NativeStackScreenProps } from '@react-navigation/native-stack';

type TProps = NativeStackScreenProps<TRootStackParamList, 'Menu'>;

interface IMenuRouteItem {
  backgroundColor: string;
  params?: { [key: string]: unknown };
  title: string;
  to: keyof TRootStackParamList;
  subtitle?: string;
}

export type { TProps, IMenuRouteItem };
