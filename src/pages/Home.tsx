import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import Manager from '../service/Manager';
import { IBook } from '../shared/interfaces/IBook';

const manager = new Manager();

const HomeScreen: React.FC = () => {
  const [books, setBooks] = useState([] as IBook[]);

  const searchBooks = async (title: string) => {
    const foundBooks = await manager.getBooks(title);
    if (foundBooks) {
      setBooks(foundBooks);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Search for book"
        onChangeText={text => searchBooks(text)}
      />
      {books.map(book => (
        <View key={book.id}>
          <Text>{book.volumeInfo.title}</Text>
        </View>
      ))}
    </View>
  );
};

export default HomeScreen;
