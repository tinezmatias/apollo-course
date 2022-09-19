const unionResolver = {
  MediaResult: {
    __resolveType(obj: any, context: any, info: any) {
      // Only Movie has a duration field
      if (obj.duration) {
        return 'Movie';
      }

      // Only Serie has a seasons field
      if (obj.seasons) {
        return 'Serie';
      }

      return null; // GraphQLError is thrown
    },
  },
  Query: {
    allMedia: () => [{ seasons: 2 }, { duration: '120min' }],
  },
};

export default unionResolver;
