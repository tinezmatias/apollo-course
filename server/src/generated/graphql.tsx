import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Author = {
  __typename?: 'Author';
  books?: Maybe<Array<Maybe<Book>>>;
  name: Scalars['String'];
};

export type Book = {
  __typename?: 'Book';
  author?: Maybe<Author>;
  newField?: Maybe<Scalars['String']>;
  /** @deprecated Use `newField`. */
  oldField?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type BookFilterInput = {
  name: Scalars['String'];
};

export type CreateAuthorInput = {
  name: Scalars['String'];
};

export type CreateBookInput = {
  author: CreateAuthorInput;
  name: Scalars['String'];
};

export type MediaResult = Movie | Serie;

export type Movie = {
  __typename?: 'Movie';
  duration?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAuthor?: Maybe<Author>;
  createBook?: Maybe<Book>;
  setDate?: Maybe<Scalars['Date']>;
};


export type MutationCreateAuthorArgs = {
  data?: InputMaybe<CreateAuthorInput>;
};


export type MutationCreateBookArgs = {
  data?: InputMaybe<CreateBookInput>;
};


export type MutationSetDateArgs = {
  today?: InputMaybe<Scalars['Date']>;
};

export type Query = {
  __typename?: 'Query';
  allMedia?: Maybe<Array<Maybe<MediaResult>>>;
  authors?: Maybe<Array<Maybe<Author>>>;
  books?: Maybe<Array<Maybe<Book>>>;
  getDate?: Maybe<Scalars['Date']>;
  getUser?: Maybe<User>;
};


export type QueryBooksArgs = {
  data: BookFilterInput;
};

export type Serie = {
  __typename?: 'Serie';
  seasons?: Maybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['Date']>;
};

export type BooksFragment = { __typename?: 'Book', title?: string | null };

export type GetBooksQueryVariables = Exact<{
  filters: BookFilterInput;
}>;


export type GetBooksQuery = { __typename?: 'Query', books?: Array<{ __typename?: 'Book', title?: string | null } | null> | null };

export type SetDateMutationVariables = Exact<{
  today?: InputMaybe<Scalars['Date']>;
}>;


export type SetDateMutation = { __typename?: 'Mutation', setDate?: any | null };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Author: ResolverTypeWrapper<Author>;
  Book: ResolverTypeWrapper<Book>;
  BookFilterInput: BookFilterInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateAuthorInput: CreateAuthorInput;
  CreateBookInput: CreateBookInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  MediaResult: ResolversTypes['Movie'] | ResolversTypes['Serie'];
  Movie: ResolverTypeWrapper<Movie>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Serie: ResolverTypeWrapper<Serie>;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Author: Author;
  Book: Book;
  BookFilterInput: BookFilterInput;
  Boolean: Scalars['Boolean'];
  CreateAuthorInput: CreateAuthorInput;
  CreateBookInput: CreateBookInput;
  Date: Scalars['Date'];
  Int: Scalars['Int'];
  MediaResult: ResolversParentTypes['Movie'] | ResolversParentTypes['Serie'];
  Movie: Movie;
  Mutation: {};
  Query: {};
  Serie: Serie;
  String: Scalars['String'];
  User: User;
};

export type AuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']> = {
  books?: Resolver<Maybe<Array<Maybe<ResolversTypes['Book']>>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookResolvers<ContextType = any, ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']> = {
  author?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType>;
  newField?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  oldField?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type MediaResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaResult'] = ResolversParentTypes['MediaResult']> = {
  __resolveType: TypeResolveFn<'Movie' | 'Serie', ParentType, ContextType>;
};

export type MovieResolvers<ContextType = any, ParentType extends ResolversParentTypes['Movie'] = ResolversParentTypes['Movie']> = {
  duration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createAuthor?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType, Partial<MutationCreateAuthorArgs>>;
  createBook?: Resolver<Maybe<ResolversTypes['Book']>, ParentType, ContextType, Partial<MutationCreateBookArgs>>;
  setDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, Partial<MutationSetDateArgs>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  allMedia?: Resolver<Maybe<Array<Maybe<ResolversTypes['MediaResult']>>>, ParentType, ContextType>;
  authors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Author']>>>, ParentType, ContextType>;
  books?: Resolver<Maybe<Array<Maybe<ResolversTypes['Book']>>>, ParentType, ContextType, RequireFields<QueryBooksArgs, 'data'>>;
  getDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  getUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
};

export type SerieResolvers<ContextType = any, ParentType extends ResolversParentTypes['Serie'] = ResolversParentTypes['Serie']> = {
  seasons?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Author?: AuthorResolvers<ContextType>;
  Book?: BookResolvers<ContextType>;
  Date?: GraphQLScalarType;
  MediaResult?: MediaResultResolvers<ContextType>;
  Movie?: MovieResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Serie?: SerieResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};


export const BooksFragmentDoc = gql`
    fragment Books on Book {
  title
}
    `;
export const GetBooksDocument = gql`
    query getBooks($filters: BookFilterInput!) {
  books(data: $filters) {
    ...Books
  }
}
    ${BooksFragmentDoc}`;

/**
 * __useGetBooksQuery__
 *
 * To run a query within a React component, call `useGetBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBooksQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useGetBooksQuery(baseOptions: Apollo.QueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, options);
      }
export function useGetBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, options);
        }
export type GetBooksQueryHookResult = ReturnType<typeof useGetBooksQuery>;
export type GetBooksLazyQueryHookResult = ReturnType<typeof useGetBooksLazyQuery>;
export type GetBooksQueryResult = Apollo.QueryResult<GetBooksQuery, GetBooksQueryVariables>;
export const SetDateDocument = gql`
    mutation SetDate($today: Date) {
  setDate(today: $today)
}
    `;
export type SetDateMutationFn = Apollo.MutationFunction<SetDateMutation, SetDateMutationVariables>;

/**
 * __useSetDateMutation__
 *
 * To run a mutation, you first call `useSetDateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetDateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setDateMutation, { data, loading, error }] = useSetDateMutation({
 *   variables: {
 *      today: // value for 'today'
 *   },
 * });
 */
export function useSetDateMutation(baseOptions?: Apollo.MutationHookOptions<SetDateMutation, SetDateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetDateMutation, SetDateMutationVariables>(SetDateDocument, options);
      }
export type SetDateMutationHookResult = ReturnType<typeof useSetDateMutation>;
export type SetDateMutationResult = Apollo.MutationResult<SetDateMutation>;
export type SetDateMutationOptions = Apollo.BaseMutationOptions<SetDateMutation, SetDateMutationVariables>;