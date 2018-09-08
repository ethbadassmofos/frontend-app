import ApolloClient from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'
import resolvers, { defaults } from './rootResolvers'

const endpoints = {
  simple: 'https://ens-index-dot-ensplorer.appspot.com/graphql' //'https://ensplorer.appspot.com:4000'
  //ws: 'wss://us1.prisma.sh/nevena-djaja/hello-hacker/dev'
}

export const apolloClient = new ApolloClient({
  // link: new SchemaLink({ schema }),
  clientState: {
    defaults,
    resolvers
  },
  uri: endpoints.simple,
  cache: new InMemoryCache()
})
