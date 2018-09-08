const typeDefs2 = `
type Address {
  address: String
}

type Node {
name: String
label: String
node: String
  subNodes: [Node]
}

type NodeEvent {
  node: Node
  actor: Address
block: Int
  tx: String
  action: String
}

type Resolver {
address: String
block: Int
txId: String
}

type EnsNode {
  owner: Address
  ownerHistory: [NodeEvent]
  resolverHistory: [Resolver]
}

type EthereumAddress {
  nodeHistory: [NodeEvent]
  nodes: [Node]
}

type Query {
  ensNode(node: String!): EnsNode
  ethereumAddress(address: String!): EthereumAddress
}
`

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
