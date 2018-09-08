import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { SchemaLink } from 'apollo-link-schema'
import fetch from 'unfetch'
import typeDefs from './types'
import resolvers from './resolvers'

import { makeExecutableSchema } from 'graphql-tools'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

// const endpoints = {
//   simple: 'https://us1.prisma.sh/nevena-djaja/hello-hacker/dev',
//   ws: 'wss://us1.prisma.sh/nevena-djaja/hello-hacker/dev'
// }

export const apolloClient = new ApolloClient({
  link: new SchemaLink({ schema }),
  //link: new HttpLink({ uri: endpoints.simple, fetch: fetch }),
  cache: new InMemoryCache()
})
