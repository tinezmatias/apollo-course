import { books } from '../mock/index';

const booksResolver = {
  Query: {
    books: () => books,
  },
  Mutation: {
    createBook: (parent: any, args: any) => args,
  },
};

export default booksResolver;
