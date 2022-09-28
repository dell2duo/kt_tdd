import React from 'react';
import Typography from '../Typography/Typography';

import { Container, ImageSC } from './Book.styled';

interface IBookProps {
  image: string;
  title: string;
  author: string;
}

const Book: React.FC<IBookProps> = ({ image, title, author }) => {
  return (
    <Container>
      <ImageSC
        source={{
          uri: image,
        }}
      />
      <Typography variant="medium">{title}</Typography>
      <Typography variant="small">{author}</Typography>
    </Container>
  );
};

export default Book;
