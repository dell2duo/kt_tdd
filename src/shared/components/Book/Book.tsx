import React from 'react';
import RenderImage from '../RenderImage/RenderImage';
import Typography from '../Typography/Typography';

import { Container } from './Book.styled';

interface IBookProps {
  title: string;
  author: string;
  image?: string;
  onPress: () => void;
}

const Book: React.FC<IBookProps> = ({ image, title, author, onPress }) => {
  return (
    <Container onPress={onPress} activeOpacity={0.8}>
      <RenderImage img={image} />
      <Typography numberOfLines={2} bold variant="medium">
        {title}
      </Typography>
      <Typography variant="small">{author}</Typography>
    </Container>
  );
};

export default Book;
