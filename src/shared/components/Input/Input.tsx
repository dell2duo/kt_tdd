import React, { useRef } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { theme } from '../../theme/theme';

import { Container, InputSC } from './Input.styled';

const Input: React.FC<TextInputProps> = props => {
  const inputRef = useRef<TextInput>();

  const focusOnInput = () => {
    inputRef.current?.focus();
  };

  return (
    <Container onPress={() => focusOnInput()} activeOpacity={1}>
      <InputSC
        {...props}
        ref={inputRef}
        placeholderTextColor={theme.colors.placeholderColor}
      />
      <Icon name="search" size={24} color={theme.colors.placeholderColor} />
    </Container>
  );
};

export default Input;
