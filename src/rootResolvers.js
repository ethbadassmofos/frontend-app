import merge from 'lodash/merge'
import { provider } from './ethers'

const rootDefaults = {
  ensNode: {
    resolver: null,
    __typename: 'EnsName'
  }
}

const resolvers = {
  EnsNode: {
    async addr({ node }) {
      const addr = await provider.resolveName(node.name)
      return addr
    }
  },
  Query: {},

  Mutation: {}
}

const defaults = merge(rootDefaults)

export default merge(resolvers)

export { defaults }
