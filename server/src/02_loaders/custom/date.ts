import { GraphQLScalarType, Kind } from 'graphql';

export const dateScalar = new GraphQLScalarType<Date | null, number>({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    return (value as Date).getTime(); // Convert outgoing Date to integer for JSON
  },
  parseValue(value) {
    return new Date(value as number); // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
    }
    return null; // Invalid hard-coded value (not an integer)
  },
});
