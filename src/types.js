const typeDefs = `


  type Name {
    name: String # awesome.jefflau.eth
    label: String # awesome
    node: String # jefflau.eth
    subDomains: [Name]
  }

  type Owner {
    address: String
    block: Int
    txId: String
  }

  type Resolver {
    address: String
    block: Int
    txId: String
  }

  type ensName {
    name: String
    label: String
    nodeHash: String
    node: String
    ownerHistory: [Owner]
    resolverHistory: [Resolver]
  }

  type Query {
    ensName(name: String): ensName
  }

  schema {
    query: Query
  }
`

export default typeDefs
