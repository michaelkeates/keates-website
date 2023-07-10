import { gql } from '@apollo/client'

export const GET_POST_BY_SLUG = gql`
  query PostBySlug($slug: String!) {
    generalSettings {
      title
    }
    postBy(slug: $slug) {
      id
      content
      title
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          firstName
          lastName
        }
      }
      categories {
        nodes {
          name
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
      modified
    }
  }
`

export const GET_ALL_POSTS = gql`
  {
    generalSettings {
      title
      description
    }
    posts(first: 10000) {
      edges {
        node {
          id
          title
          slug
          date
          categories {
            nodes {
              name
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
          excerpt(format: RENDERED)
        }
      }
    }
  }
`

export const GET_REPOSITORY_BY_NAME = gql`
  query RepositoriesByName($name: String!) {
    repository(name: $name, owner: "michaelkeates") {
      id
      name
      object(expression: "HEAD:README.md") {
        ... on Blob {
          text
        }
      }
      url
      openGraphImageUrl
      languages(first: 10) {
        edges {
          node {
            name
            id
          }
        }
        totalSize
      }
      updatedAt
    }
  }
`

export const GET_ALL_REPOSITORIES = gql`
  {
    user(login: "michaelkeates") {
      repositories(first: 10) {
        edges {
          node {
            id
            name
            object(expression: "HEAD:README.md") {
              ... on Blob {
                text
              }
            }
            openGraphImageUrl
            url
            description
            languages(first: 10) {
              nodes {
                id
                name
              }
              totalSize
            }
            updatedAt
          }
        }
      }
    }
  }
`

export const GET_USER_REPOSITORIES = gql`
  {
    user(login: "michaelkeates") {
      repositories(first: 10, orderBy: { field: PUSHED_AT, direction: DESC }) {
        edges {
          node {
            id
            name
            object(expression: "HEAD:README.md") {
              ... on Blob {
                text
              }
            }
            openGraphImageUrl
            url
            description
            languages(first: 10) {
              nodes {
                id
                name
              }
              totalSize
            }
            updatedAt
          }
        }
      }
    }
  }
`
