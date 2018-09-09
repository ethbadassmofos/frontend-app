export const processNodeEventData = history => {
  const massagedData = (history || []).map(item => {
    const array = Object.entries(item)
      .map(value => {
        switch (value[0]) {
          case 'node': {
            value = [value[0], value[1].nameHash]
            break
          }
          case 'actor': {
            value = [value[0], value[1].address, { type: 'address-in-app' }]
            break
          }
          default: {
            value.push({ type: value[0] })
          }
        }

        return value
      })
      .filter(value => value[0] !== '__typename')

    return array.reduce((acc, curr) => {
      acc[curr[0]] = { value: curr[1], options: curr[2] || {} }
      return acc
    }, {})
  })

  return massagedData
}

export const processNodeData = nodes =>
  nodes.map(node =>
    Object.keys(node).reduce((ret, key) => {
      if (key === '__typename') {
        return ret
      }
      ret[key] = { value: node[key], options: {} }

      return ret
    }, {})
  )

export const processOwnerStats = stats =>
  stats.map(stat => ({
    address: { value: stat.owner.address, options: { type: 'address-in-app' } },
    nodesOwned: { value: stat.nodesOwned }
  }))
