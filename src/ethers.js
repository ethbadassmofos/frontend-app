import ethers from 'ethers'

export let provider
export let signer

function getEthers() {
  if (!provider) {
    setupEthers()
    return ethers
  } else {
    return ethers
  }
}

export async function setupEthers (network = 'mainnet') {
  if (typeof window.web3 !== undefined) {
    if (network === 'rinkeby') {
      ethers.providers.networks.rinkeby.ensAddress =
        '0xe7410170f87102df0055eb195163a03b7f2bff4a'
    }
    // Use Mist/MetaMask's provider
    provider = new ethers.providers.Web3Provider(
      window.web3.currentProvider,
      network
    )
    const accounts = await provider.listAccounts()
    signer = provider.getSigner(accounts[0])
  } else {
    console.log('No web3? You should consider trying MetaMask!')
    // Allow read-only access to the blockchain if no Mist/Metamask/EthersWallet
    provider = ethers.providers.getDefaultProvider(network)
  }
  console.log(ethers, provider)
  return provider
}

export default getEthers
