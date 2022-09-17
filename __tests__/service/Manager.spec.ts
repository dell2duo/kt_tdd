import Manager from '../../src/service/Manager';
import { MOCK_BOOKS } from '../mocks';

jest.mock('../../src/shared/api/BaseManager', () => {
  return class BaseManagerMock {
    get() {}
  };
});

describe('Testing Manager', () => {
  let manager = new Manager();

  beforeAll(() => {
    manager.apiInstance.get = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should test if we are getting the books we need', async () => {
    (manager.apiInstance.get as jest.Mock).mockResolvedValue(MOCK_BOOKS);
    const book = 'Harry Potter';
    const searchedBooks = await manager.getBooks(book, 5);

    expect(searchedBooks).toHaveLength(5);
  });
});
