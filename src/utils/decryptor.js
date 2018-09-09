import { decryptHashes } from '../preimage'

const requests = []
let timer

const process = async () => {
  if (requests.length < 25) {
    if (!requests.length || Date.now() - requests[0].ts < 500) {
      return
    }
  }

  const count = requests.length

  const labels = await decryptHashes(requests.map(r => r.hash))

  requests.forEach((r, index) => {
    r.resolve(labels[index])
  })

  requests.splice(0, count)
}

export const decrypt = hash => {
  const promise = new Promise(resolve => {
    requests.push({
      resolve,
      hash,
      ts: Date.now()
    })
  })

  clearTimeout(timer)
  timer = setTimeout(process, 1000)

  return promise
}
