import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { theme } from '../../theme/theme';

import { ImageSC, ImgPlaceholder } from './RenderImage.styled';

const RenderImage: React.FC<{ img?: string }> = ({ img }) => {
  if (img) {
    return (
      <ImageSC
        testID="book-image"
        source={{
          uri: img,
        }}
      />
    );
  }
  return (
    <ImgPlaceholder testID="book-image-placeholder">
      <Icon name="image" size={54} color={theme.colors.placeholderColor} />
    </ImgPlaceholder>
  );
};

export default RenderImage;
