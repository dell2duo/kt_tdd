import React from 'react';
import { ImageProps } from 'react-native';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import Home from '../../src/pages/Home/Home';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '../../src/shared/theme/theme';
import Manager from '../../src/service/Manager';
import { MOCK_BOOKS } from '../mocks.mock';
import { useNavigation } from '@react-navigation/native';

jest.mock('react-native-vector-icons/Feather', () => {
  const { View } = require('react-native');
  return ({ name }: { name: string }) => <View testID={name} />;
});

jest.mock('../../src/service/Manager');

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn().mockImplementation(() => ({
    navigate: jest.fn(),
  })),
}));

describe('Tests on Home', () => {
  let managerInstance: Manager;

  const makeSUT = () => {
    return render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>,
    );
  };

  beforeAll(() => {
    managerInstance = (Manager as jest.Mock).mock.instances[0];
    managerInstance.getBooks = jest.fn();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render home', () => {
    const screen = makeSUT();

    expect(screen.getByText('Book Finder')).not.toBeNull();
    expect(screen.getByPlaceholderText('Find your book!')).not.toBeNull();
    expect(screen.getByTestId('search')).not.toBeNull();
  });

  it('should render list of books', async () => {
    (managerInstance.getBooks as jest.Mock).mockResolvedValueOnce(MOCK_BOOKS);
    const screen = makeSUT();
    const input = screen.getByPlaceholderText('Find your book!');
    const firstBook = MOCK_BOOKS[0];
    const thirdBook = MOCK_BOOKS[2];

    await waitFor(() => fireEvent.changeText(input, 'harry potter'));

    expect(managerInstance.getBooks).toHaveBeenCalled();

    expect(screen.queryByText(firstBook.volumeInfo.title)).not.toBeNull();
    expect(
      screen.queryAllByText(firstBook.volumeInfo.authors[0]),
    ).not.toBeNull();

    const imageComps = screen.queryAllByTestId('book-image');
    const imagePlaceholderComps = screen.queryAllByTestId(
      'book-image-placeholder',
    );

    expect(imageComps.length).toBeGreaterThan(0);
    expect(imagePlaceholderComps.length).toBeGreaterThan(0);

    expect((imageComps[0].props as ImageProps).source).toEqual({
      uri: thirdBook.volumeInfo.imageLinks?.thumbnail,
    });
  });

  it('should navigate to details screen', async () => {
    const navigateMock = jest.fn();
    (useNavigation as jest.Mock).mockImplementation(() => ({
      navigate: navigateMock,
    }));
    (managerInstance.getBooks as jest.Mock).mockResolvedValueOnce(MOCK_BOOKS);
    const screen = makeSUT();
    const input = screen.getByPlaceholderText('Find your book!');

    await waitFor(() => fireEvent.changeText(input, 'harry potter'));

    expect(managerInstance.getBooks).toHaveBeenCalled();

    const firstBookComp = screen.getByText(MOCK_BOOKS[0].volumeInfo.title);
    fireEvent.press(firstBookComp);

    expect(navigateMock).toHaveBeenCalledTimes(1);
    expect(navigateMock).toHaveBeenCalledWith('BookDetails', {
      book: MOCK_BOOKS[0],
    });
  });
});
