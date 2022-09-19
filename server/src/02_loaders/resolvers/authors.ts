import { authors } from '../../mock/index';

const authorsResolver = {
  Query: {
    authors: () => authors,
  },
  Mutation: {
    createAuthor: (parent: any, args: any) => args.data,
  },
};

export default authorsResolver;
