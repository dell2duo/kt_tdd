export interface IBookDetails {
  title: string;
  description: string;
  authors: string[];
  imageLinks?: {
    thumbnail: string;
  };
}
