const typeDefs2 = `
type Owner {
	address: String
	block: Int
  txId: String
}

type Name {
  name: String # awesome.jefflau.eth
  label: String # awesome
  node: String # jefflau.eth
	# resolver: String
	# addr: String
	# content: String
	subDomains: [Name]
}

type Resolver {
  address: String!
  block: Int
  txId: String
}

query ensName(name: String){
	ownerHistory: [Owner]
  resolverHistory: [Resolver]
}

query ethereumAddress(address: String){
	names: [Name]
  namesOwned: Int
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
