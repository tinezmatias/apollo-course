import { books } from '../../mock/index';

const booksResolver = {
  Query: {
    books: (parent: any, args: { data: { name: string } }) => {
      console.log('>>>>> args', args);
      return books;
    },
  },
  Mutation: {
    createBook: (parent: any, args: any) => args,
  },
};

export default booksResolver;
