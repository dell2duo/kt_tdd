import React from 'react';
import { TextProps } from 'react-native';
import { theme } from '../../theme/theme';

import { TypographySC } from './Typography.styled';

export interface ITypographyProps extends TextProps {
  variant: keyof typeof theme.fontSize;
  bold?: boolean;
  align?: 'left' | 'center' | 'right' | 'justify';
}

const Typography: React.FC<ITypographyProps> = ({
  variant,
  bold,
  children,
  align,
  ...rest
}) => {
  return (
    <TypographySC variant={variant} bold={bold} align={align} {...rest}>
      {children}
    </TypographySC>
  );
};

export default Typography;
