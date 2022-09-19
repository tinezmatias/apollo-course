import { DocumentNode } from 'graphql';
import { get as _get } from 'lodash';
import { ApolloCache } from '@apollo/client';

/**
 * 1: This is for update cache on ADD mutation, basically, send it on update option query, and send as first paremeter entity query.
 * 2: Let's flush magic!
 *
 * @param queryAll
 */
export const updateAddCache =
  (queryAll: DocumentNode, variables: any = {}, addAtEnd = false) =>
  async (cache: ApolloCache<any>, { data }: any) => {
    // Fetch the todos from the cache
    const existingData: any = cache.readQuery({ query: queryAll, variables });
    const existingDataKey = Object.keys(existingData)[0];
    // access to query name
    const dataKey = Object.keys(data)[0];
    // Add the new todo to the cache
    const newRecord = data[dataKey];
    // Finally, write cache
    await cache.writeQuery({
      query: queryAll,
      variables,
      data: {
        [existingDataKey]: addAtEnd
          ? [...existingData[existingDataKey], newRecord]
          : [newRecord, ...existingData[existingDataKey]],
      },
    });
  };

/**
 * 1: This is for update cache on REMOVE mutation. Filter existing data excluding removed id.
 * 2: Thats it.
 *
 * @param queryAll
 */
export const updateRemoveCache =
  (queryAll: DocumentNode, variables: any = {}) =>
  (cache: ApolloCache<any>, { data }: any) => {
    // Fetch the all from the cache
    const existingData: any = cache.readQuery({ query: queryAll, variables });
    const existingDataKey = Object.keys(existingData)[0];
    // access to query name
    const dataKey = Object.keys(data)[0];
    // Add the new todo to the cache
    const removedId = _get(data[dataKey], 'id', null);
    const finalData = (existingData[existingDataKey] || []).filter(
      (item: any) => item.id !== removedId
    );
    // Finally, write cache MADAFAKER!
    cache.writeQuery({
      query: queryAll,
      variables,
      data: { [existingDataKey]: finalData },
    });
  };
