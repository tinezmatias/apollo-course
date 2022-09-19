import { dateScalar } from '../custom/date';

const customResolver = {
  Date: dateScalar,
  Query: {
    getDate: () => new Date(),
  },
  Mutation: {
    setDate: (parent: any, { today }: { today: Date }, context: any) => {
      console.log('>>>>>', context);

      return today;
    },
  },
};

export default customResolver;
