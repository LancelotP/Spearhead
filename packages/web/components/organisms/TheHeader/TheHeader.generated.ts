import * as Types from '../../../graphql/types';


export type TheHeaderFragment = (
  { __typename?: 'User' }
  & Pick<Types.User, 'id' | 'firstName' | 'lastName'>
);

export type TheHeaderQueryVariables = {};


export type TheHeaderQuery = (
  { __typename?: 'Query' }
  & { viewer: Types.Maybe<(
    { __typename?: 'User' }
    & Pick<Types.User, 'id'>
    & TheHeaderFragment
  )> }
);

export type TheHeaderMutationVariables = {
  input: Types.UserCreateInput
};


export type TheHeaderMutation = (
  { __typename?: 'Mutation' }
  & { userCreate: (
    { __typename?: 'User' }
    & Pick<Types.User, 'id'>
    & TheHeaderFragment
  ) }
);

import gql from 'graphql-tag';
export const TheHeaderFragment = gql`
    fragment TheHeaderFragment on User {
  id
  firstName
  lastName
}
    `;
export const TheHeaderQuery = gql`
    query TheHeaderQuery {
  viewer {
    id
    ...TheHeaderFragment
  }
}
    ${TheHeaderFragment}`;
export const TheHeaderMutation = gql`
    mutation TheHeaderMutation($input: UserCreateInput!) {
  userCreate(input: $input) {
    id
    ...TheHeaderFragment
  }
}
    ${TheHeaderFragment}`;