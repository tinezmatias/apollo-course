import { authors } from '../mock/index';

const authorsResolver = {
  Query: {
    authors: () => authors,
  },
  Mutation: {
    createBook: (parent: any, args: any) => args,
  },
};

export default authorsResolver;
