import { render } from '@testing-library/react-native';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import BookDetails from '../../src/pages/BookDetails/BookDetails';
import { IBook } from '../../src/shared/interfaces/IBook';
import { theme } from '../../src/shared/theme/theme';
import { useRoute } from '@react-navigation/native';
import { MOCK_BOOKS } from '../mocks.mock';
import { ImageProps } from 'react-native';

jest.mock('@react-navigation/native', () => ({
  useRoute: jest.fn(),
}));

jest.mock('react-native-vector-icons/Feather', () => {
  const { View } = require('react-native');
  return ({ name }: { name: string }) => <View testID={name} />;
});

describe('Tests on BookDetails', () => {
  const makeSUT = (book: IBook) => {
    (useRoute as jest.Mock).mockReturnValue({
      params: { book },
    });
    return render(
      <ThemeProvider theme={theme}>
        <BookDetails />
      </ThemeProvider>,
    );
  };

  it('should render screen with image', () => {
    const mockedBook = MOCK_BOOKS[2];
    const screen = makeSUT(mockedBook);

    expect(useRoute).toHaveBeenCalled();

    expect(screen.getByText(mockedBook.volumeInfo.title)).not.toBeNull();
    expect(
      screen.getByText(`by ${mockedBook.volumeInfo.authors[0]}`),
    ).not.toBeNull();
    expect(screen.getByText(mockedBook.volumeInfo.description)).not.toBeNull();

    const imageComp = screen.getByTestId('book-image');

    expect((imageComp.props as ImageProps).source).toEqual({
      uri: mockedBook.volumeInfo.imageLinks?.thumbnail,
    });
  });

  it('should render screen with image placeholder', () => {
    const mockedBook = MOCK_BOOKS[0];
    const screen = makeSUT(mockedBook);

    expect(useRoute).toHaveBeenCalled();

    expect(screen.getByText(mockedBook.volumeInfo.title)).not.toBeNull();
    expect(
      screen.getByText(`by ${mockedBook.volumeInfo.authors[0]}`),
    ).not.toBeNull();
    expect(screen.getByText(mockedBook.volumeInfo.description)).not.toBeNull();

    const imagePlaceholderComp = screen.getByTestId('book-image-placeholder');

    expect(imagePlaceholderComp).not.toBeNull();
  });
});
