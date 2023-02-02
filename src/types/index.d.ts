type SvgProps = typeof Svg;

type TRootStackParamList = {
  Menu: undefined;
  Quiz: {
    quizType?: string;
    title?: string;
  };
  Settings: undefined;
};

type TLanguage = 'es' | 'en';

type TThemeMode = 'system' | 'light' | 'dark';

type ErrnoException = Error & {
  errno?: number;
  code?: string;
  path?: string;
  syscall?: string;
  stack?: string;
};
