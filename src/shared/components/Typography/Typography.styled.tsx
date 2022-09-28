import styled from 'styled-components/native';
import { ITypographyProps } from './Typography';

export const TypographySC = styled.Text<ITypographyProps>`
  font-size: ${({ variant, theme }) => theme.fontSize[variant]}px;
  color: ${({ theme }) => theme.colors.text};
`;
