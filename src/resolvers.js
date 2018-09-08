const mockName = {
  label: 'vitalik',
  parent: 'eth',
  name: 'vitalik.eth',
  ownerHistory: [
    {
      address: '0x4dfb3454fe2d80e92db48d4453eca87dfa580dd3',
      block: 1
    }
  ],
  resolverHistory: [
    {
      address: '0x4dfb3454fe2d80e92db48d4453eca87dfa580dd3',
      block: 1
    }
  ]
}

const mockName2 = {
  label: 'jefflau',
  parent: 'eth',
  name: 'jefflau.eth',
  ownerHistory: [
    {
      address: '0x4dfb3454fe2d80e92db48d4453eca87dfa580dd3',
      block: 1
    }
  ],
  resolverHistory: [
    {
      address: '0x4dfb3454fe2d80e92db48d4453eca87dfa580dd3',
      block: 1
    }
  ]
}

const resolvers = {
  Query: {
    ensName(_, { name }) {
      if (name === 'vitalik.eth') {
        return mockName
      }
      return mockName2
    }
  }
  // Mutation: {
  //   upvotePost(_, { postId }) {
  //     const post = find(posts, { id: postId })
  //     if (!post) {
  //       throw new Error(`Couldn't find post with id ${postId}`)
  //     }
  //     post.votes += 1
  //     return post
  //   }
  // },
  // Author: {
  //   posts(author) {
  //     return filter(posts, { authorId: author.id })
  //   }
  // },
  // Post: {
  //   author(post) {
  //     return find(authors, { id: post.authorId })
  //   }
  // }
}

export default resolvers
