import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { FlatList, FlatListProps, ListRenderItemInfo } from 'react-native';
import { TRootStackPagesParams } from '../../../navigation/Routes';
import { IBook } from '../../interfaces/IBook';
import Book from '../Book/Book';

const ListBooks: React.FC<Omit<FlatListProps<IBook>, 'renderItem'>> = props => {
  const { navigate } =
    useNavigation<NavigationProp<TRootStackPagesParams, 'BookDetails'>>();

  const renderItem = ({ item }: ListRenderItemInfo<IBook>) => {
    return (
      <Book
        key={item.id}
        title={item.volumeInfo.title}
        author={item.volumeInfo.authors?.[0]}
        image={item.volumeInfo.imageLinks?.thumbnail}
        onPress={() => navigate('BookDetails', { book: item })}
      />
    );
  };

  return (
    <FlatList
      {...props}
      style={{ paddingTop: 16, width: '100%' }}
      contentContainerStyle={{ alignItems: 'center' }}
      keyExtractor={({ id }) => id}
      renderItem={renderItem}
      numColumns={2}
    />
  );
};

export default ListBooks;
