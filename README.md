# nextjs-ethereum-starter

This project was sponsored by the [BuidlGuidl](https://buidlguidl.com). Please support the BuidlGuidl if this project has been helpful!

---

My iteration of [Austin Griffith's scaffold-eth](https://github.com/austintgriffith/scaffold-eth).
Also inspired by [Nader Dabit's blog post](https://dev.to/dabit3/the-complete-guide-to-full-stack-ethereum-development-3j13)

- [Typescript](https://www.typescriptlang.org/)
- [Hardhat](https://hardhat.org/)
- [TypeChain](https://github.com/ethereum-ts/TypeChain)
- [Ethers.js](https://docs.ethers.io/v5/)
- [useDApp](https://usedapp.io/)
- [Chakra UI](https://chakra-ui.com/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
- Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)

👀 [View the Live Demo](https://nextjs-ethereum-starter.vercel.app/)

## Getting Started

This project uses Yarn Workspaces, so you'll need [Yarn](https://classic.yarnpkg.com/en/docs/install)

```bash
git clone https://github.com/ChangoMan/nextjs-ethereum-starter.git
cd nextjs-ethereum-starter

yarn install

# Start up the Hardhat Network
yarn chain
```

Here we just install the npm project's dependencies, and by running `yarn chain` we spin up an instance of Hardhat Network that you can connect to using MetaMask. In a different terminal in the same directory, run:

```bash
yarn deploy
```

This will deploy the contract to Hardhat Network. After this completes run:

```bash
yarn dev
```

This will start up the Next.js development server and your site will be available at http://localhost:3000/

To interact with the local contract, be sure to switch your MetaMask Network to `Localhost 8545`

###[For chainlink oracle](#chainlink-oracle)

1. Added a folder in packages/frontend/api
2. Added a service with functions to interect with the contract in packages/frontend/service
3. Create an .env.local with the MNEMONIC at the root of frontend

The contract being used can be found here [https://rinkeby.etherscan.io/address/0x6C7792Cf38AaeFb063B74E5E73E1bC92f79B673d#code](https://rinkeby.etherscan.io/address/0x6C7792Cf38AaeFb063B74E5E73E1bC92f79B673d#code)

It uses chainlink's VRF v2

The functions functions of the api are mapped to the contract functions:

- s_randomWords
- s_requestId
- requestRandomWords

###To run the api requests

- `yarn dev` or `yarn start`

###The endpoints are

- [localhost:3000/api/getRequestId](http://localhost:3000/api/getRequestId)
- [localhost:3000/api/requestRandomWords](http://localhost:3000/api/requestRandomWords)
- [localhost:3000/api/getRandomWords/:id](http://localhost:3000/api/getRandomWords/1)
