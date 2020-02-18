import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};



export type Node = {
  readonly id: Scalars['ID'],
};

export type Post = Node & {
  readonly __typename?: 'Post',
  readonly id: Scalars['ID'],
  readonly title: Scalars['String'],
};

export type Query = {
  readonly __typename?: 'Query',
  readonly posts: ReadonlyArray<Maybe<Post>>,
};

export type PostsQueryVariables = {};


export type PostsQuery = (
  { readonly __typename?: 'Query' }
  & { readonly posts: ReadonlyArray<Maybe<(
    { readonly __typename?: 'Post' }
    & Pick<Post, 'id' | 'title'>
  )>> }
);

export const PostsDocument = gql`
    query Posts {
  posts {
    id
    title
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PostsGQL extends Apollo.Query<PostsQuery, PostsQueryVariables> {
    document = PostsDocument;
    
  }