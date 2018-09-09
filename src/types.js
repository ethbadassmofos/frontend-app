const typeDefs = `
type Address {
	address: String
}

type Node {
  name: String
	nameHash: String
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
	node: Node,
  owner: Address,
	ownerHistory: [NodeEvent]
	resolverHistory: [Resolver]
}

type EthereumAddress {
	nodeHistory: [NodeEvent]
	nodes: [Node]
}

type OwnerStat {
	owner: Address
	nodesOwned: Int
}

type Query {
	ensNode(name: String!): EnsNode
	ethereumAddress(address: String!): EthereumAddress
	ownerStats(limit: Int): [OwnerStat]
}
`

export default typeDefs
