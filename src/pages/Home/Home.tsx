import React, { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import Manager from '../../service/Manager';
import Input from '../../shared/components/Input/Input';
import ListBooks from '../../shared/components/ListBooks/ListBooks';
import Typography from '../../shared/components/Typography/Typography';
import { IBook } from '../../shared/interfaces/IBook';
import { Container, TitleContainer } from './Home.styled';

const manager = new Manager();

const Home: React.FC = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [search, setSearch] = useState('');

  const getBooks = useCallback(async (book: string) => {
    if (!book || book.length < 3) {
      return;
    }
    const result = await manager.getBooks(book);
    if (result) {
      setBooks(result);
    }
  }, []);

  useEffect(() => {
    getBooks(search);
  }, [getBooks, search]);

  return (
    <Container>
      <TitleContainer>
        <Typography variant="large">Book Finder</Typography>
      </TitleContainer>
      <Input
        value={search}
        onChangeText={setSearch}
        placeholder="Find your book!"
      />
      <ListBooks data={books} showsVerticalScrollIndicator={false} />
    </Container>
  );
};

export default Home;
