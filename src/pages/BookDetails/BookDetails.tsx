import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { TRootStackPagesParams } from '../../navigation/Routes';
import RenderImage from '../../shared/components/RenderImage/RenderImage';
import Typography from '../../shared/components/Typography/Typography';

import {
  AuthorNameContainer,
  Container,
  TitleContainer,
  TopContainer,
} from './BookDetails.styled';
import { ScrollView } from 'react-native';

const BookDetails: React.FC = () => {
  const {
    params: { book },
  } = useRoute<RouteProp<TRootStackPagesParams, 'BookDetails'>>();
  return (
    <ScrollView>
      <Container>
        <TopContainer>
          <TitleContainer>
            <Typography variant="medium" bold>
              {book.volumeInfo.title}
            </Typography>
          </TitleContainer>
          <RenderImage img={book.volumeInfo.imageLinks?.thumbnail} />
        </TopContainer>
        <AuthorNameContainer>
          <Typography variant="medium">{`by ${book.volumeInfo.authors[0]}`}</Typography>
        </AuthorNameContainer>
        <Typography variant="small" align="justify">
          {book.volumeInfo.description}
        </Typography>
      </Container>
    </ScrollView>
  );
};

export default BookDetails;
