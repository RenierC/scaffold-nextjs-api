import { ethers } from 'ethers'

// const MNEMONIC =
//   'west palm host divorce sponsor apart eyebrow valid gesture furnace gown palm'

const provider = new ethers.providers.JsonRpcProvider(
  'https://rinkeby.infura.io/v3/ec6a8acd1d354717acec099ad46a0bab'
)

const contractAddress = '0x6C7792Cf38AaeFb063B74E5E73E1bC92f79B673d'

// Contract's abi
const abi = [
  {
    inputs: [
      { internalType: 'uint64', name: 'subscriptionId', type: 'uint64' },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      { internalType: 'address', name: 'have', type: 'address' },
      { internalType: 'address', name: 'want', type: 'address' },
    ],
    name: 'OnlyCoordinatorCanFulfill',
    type: 'error',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'requestId', type: 'uint256' },
      { internalType: 'uint256[]', name: 'randomWords', type: 'uint256[]' },
    ],
    name: 'rawFulfillRandomWords',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'requestRandomWords',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 's_randomWords',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 's_requestId',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
]

let wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC)
wallet = wallet.connect(provider)
const contract = new ethers.Contract(contractAddress, abi, wallet)

// read function
export const getRequestId = async (): Promise<any> => {
  return await contract.s_requestId()
}

// read function
export const getRandomWords = async (index: number): Promise<any> => {
  return await contract.s_randomWords(index)
}

// write function
export const requestRandomWords = async (): Promise<void> => {
  await contract.requestRandomWords()
}
