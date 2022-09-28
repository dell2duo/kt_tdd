import 'styled-components/native';
import { theme } from '../theme/theme';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: typeof theme.colors;
    fontSize: typeof theme.fontSize;
  }
}
