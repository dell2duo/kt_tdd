import React from 'react';
import { TextProps } from 'react-native-svg';
import { theme } from '../../theme/theme';

import { TypographySC } from './Typography.styled';

export interface ITypographyProps extends TextProps {
  variant: keyof typeof theme.fontSize;
}

const Typography: React.FC<ITypographyProps> = ({ variant, children }) => {
  return <TypographySC variant={variant}>{children}</TypographySC>;
};

export default Typography;
