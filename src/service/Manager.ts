import BaseManager from '../shared/api/BaseManager';
import { ISearchResult } from '../shared/interfaces/ISearchResult';

export default class Manager {
  public apiInstance = new BaseManager();
  constructor() {}

  async getBooks(title: string, numberOfBooksPerBatch = 10, index = 0) {
    const requestURL = `https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=${numberOfBooksPerBatch}&startIndex=${index}`;
    try {
      const result = await this.apiInstance.get<ISearchResult>(requestURL);

      return result.data.items;
    } catch (error) {}
  }
}
