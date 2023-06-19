/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  NFTDutchAuction_ERC20BidsUpgradeable,
  NFTDutchAuction_ERC20BidsUpgradeableInterface,
} from "../../../contracts/NFTDutchAuction_ERC20BidsUpgradeable.sol/NFTDutchAuction_ERC20BidsUpgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "auctionStatusOpen",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "bid",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "buyer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20TokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "erc721TokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_nftTokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_reservePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_numBlocksAuctionOpen",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_offerPriceDecrement",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "seller",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523073ffffffffffffffffffffffffffffffffffffffff1660809073ffffffffffffffffffffffffffffffffffffffff1681525034801561004357600080fd5b50608051612b6861007b600039600081816102c00152818161034e015281816109f101528181610a7f0152610b2f0152612b686000f3fe6080604052600436106100a75760003560e01c8063715018a611610064578063715018a61461019b5780637150d8ae146101b257806386489ba9146101dd5780638da5cb5b146102065780639d1b464a14610231578063f2fde38b1461025c576100a7565b806308551a53146100ac5780630b48ab8f146100d75780633659cfe614610102578063454a2ab31461012b5780634f1ef2861461015457806352d1902d14610170575b600080fd5b3480156100b857600080fd5b506100c1610285565b6040516100ce9190611b91565b60405180910390f35b3480156100e357600080fd5b506100ec6102ab565b6040516100f99190611bc7565b60405180910390f35b34801561010e57600080fd5b5061012960048036038101906101249190611c22565b6102be565b005b34801561013757600080fd5b50610152600480360381019061014d9190611c85565b610446565b005b61016e60048036038101906101699190611df8565b6109ef565b005b34801561017c57600080fd5b50610185610b2b565b6040516101929190611e6d565b60405180910390f35b3480156101a757600080fd5b506101b0610be4565b005b3480156101be57600080fd5b506101c7610bf8565b6040516101d49190611b91565b60405180910390f35b3480156101e957600080fd5b5061020460048036038101906101ff9190611e88565b610c1e565b005b34801561021257600080fd5b5061021b6110ff565b6040516102289190611b91565b60405180910390f35b34801561023d57600080fd5b50610246611129565b6040516102539190611f24565b60405180910390f35b34801561026857600080fd5b50610283600480360381019061027e9190611c22565b61118e565b005b60d060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60d360009054906101000a900460ff1681565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff160361034c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034390611fc2565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1661038b611211565b73ffffffffffffffffffffffffffffffffffffffff16146103e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103d890612054565b60405180910390fd5b6103ea81611268565b61044381600067ffffffffffffffff81111561040957610408611ccd565b5b6040519080825280601f01601f19166020018201604052801561043b5781602001600182028036833780820191505090505b5060006112af565b50565b61045a679ee850203302d89860c01b61141d565b61046e67522eeb6c8dddb7bb60c01b61141d565b61048267321c62df1718ea5560c01b61141d565b610496674f2a13225ab5291a60c01b61141d565b61049e611420565b6104dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d4906120c0565b60405180910390fd5b6104f167bf2fcc9b3882529260c01b61141d565b6105056748c86677f59d4f3560c01b61141d565b610519676c37874fbd66af5b60c01b61141d565b61052d67042b3fbad4d79bde60c01b61141d565b60cf60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16036105bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b49061212c565b60405180910390fd5b6105d167effdc42ce8e47b3560c01b61141d565b6105e5679cde75c02e37838e60c01b61141d565b6105f967491777d1d96a62b860c01b61141d565b61060d67aa0ed26fd9a020b860c01b61141d565b600073ffffffffffffffffffffffffffffffffffffffff1660cf60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461069e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069590612198565b60405180910390fd5b6106b2678f6bca248e8b109e60c01b61141d565b6106c6675162ca81087e39f260c01b61141d565b6106da67f7e1aa363623df1860c01b61141d565b6106ee67d1993b977a42474660c01b61141d565b60d060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff160361077e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077590612204565b60405180910390fd5b6107926772709b2e3e8f858560c01b61141d565b6107a667387952a23223ed1460c01b61141d565b6107ba67de339f0a5f7ccfe260c01b61141d565b6107ce672b54742719f44d2660c01b61141d565b6107d6611129565b811015610818576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080f90612270565b60405180910390fd5b61082c67d8eba5945d92876860c01b61141d565b610840673fbc70d9d72f493e60c01b61141d565b6108546719d21811b77192fb60c01b61141d565b600060cb60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3360d060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166108c0611129565b6040518463ffffffff1660e01b81526004016108de93929190612290565b6020604051808303816000875af11580156108fd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092191906122f3565b905061093767e6d7b0aa9581c27160c01b61141d565b61094b67932d0ee50a6e1dfb60c01b61141d565b61095f678461f6f66782401460c01b61141d565b60011515811515146109a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099d9061236c565b60405180910390fd5b6109ba67da8e60c8255ae40d60c01b61141d565b6109ce67f319fd51042c36e560c01b61141d565b6109e267620a328bac1e2de460c01b61141d565b6109eb33611470565b5050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1603610a7d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a7490611fc2565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610abc611211565b73ffffffffffffffffffffffffffffffffffffffff1614610b12576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0990612054565b60405180910390fd5b610b1b82611268565b610b27828260016112af565b5050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614610bbb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb2906123fe565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b905090565b610bec611685565b610bf66000611703565b565b60cf60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610c3267e84c139ade0c851a60c01b61141d565b60008060019054906101000a900460ff16159050808015610c635750600160008054906101000a900460ff1660ff16105b80610c905750610c72306117c9565b158015610c8f5750600160008054906101000a900460ff1660ff16145b5b610ccf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cc690612490565b60405180910390fd5b60016000806101000a81548160ff021916908360ff1602179055508015610d0c576001600060016101000a81548160ff0219169083151502179055505b610d2067bf190c3fd6a47abf60c01b61141d565b610d34670cdbabcf70f37f4860c01b61141d565b610d4867f5d835a59dcc01d360c01b61141d565b3360d060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610d9d67f71ae3e8b770923d60c01b61141d565b4360d181905550610db86755d737b520b68a6660c01b61141d565b600160d360006101000a81548160ff021916908315150217905550610de7678a8af47ee6ae849d60c01b61141d565b8460c981905550610e026769c9d32a1e917a5d60c01b61141d565b8560ca60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610e5767dd4503f1d9ebc8b860c01b61141d565b8660cb60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610eac67ec3af2d51ec5e30a60c01b61141d565b610ec067e94c9abe60e8c85d60c01b61141d565b610ed4670409fbb62b6aa98260c01b61141d565b60d060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660ca60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636352211e60c9546040518263ffffffff1660e01b8152600401610f6a9190611f24565b602060405180830381865afa158015610f87573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fab91906124c5565b73ffffffffffffffffffffffffffffffffffffffff1614611001576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ff89061253e565b60405180910390fd5b61101567f1cac7173bc0aa4b60c01b61141d565b61102967814267a8bc693be060c01b61141d565b8360cc8190555061104467ebcb0f18e3aaf2a360c01b61141d565b8260cd8190555061105f67b4fed981e3ec77cb60c01b61141d565b8160ce8190555061107a67c090ce2f9ccd6d3e60c01b61141d565b60ce5460cd5461108a919061258d565b60cc5461109791906125cf565b60d28190555080156110f65760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860016040516110ed9190612655565b60405180910390a15b50505050505050565b6000609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600061113f676a7b58e5419781bd60c01b61141d565b611153679df0983b4780adda60c01b61141d565b611167678c702e8f49ae98cf60c01b61141d565b60ce546111726117ec565b61117c919061258d565b60d2546111899190612670565b905090565b611196611685565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611205576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111fc90612716565b60405180910390fd5b61120e81611703565b50565b600061123f7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b611844565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61127c6738977099c46eade160c01b61141d565b611284611685565b61129867d55fd4ff18b3931560c01b61141d565b6112ac67f3acb14380773d2660c01b61141d565b50565b6112db7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd914360001b61184e565b60000160009054906101000a900460ff16156112ff576112fa83611858565b611418565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa92505050801561136757506040513d601f19601f820116820180604052508101906113649190612762565b60015b6113a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161139d90612801565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b811461140b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161140290612893565b60405180910390fd5b50611417838383611911565b5b505050565b50565b60006114366726547765c28b934b60c01b61141d565b61144a67dc6a89328027cbc460c01b61141d565b61145e67172e29a7c57396f860c01b61141d565b60cd546114696117ec565b1115905090565b61148467e6fbbb701ebcb65260c01b61141d565b611498676a4907521943554c60c01b61141d565b6114ac67bde54a779735cc7860c01b61141d565b60ca60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd60d060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168360c9546040518463ffffffff1660e01b815260040161152f93929190612290565b600060405180830381600087803b15801561154957600080fd5b505af115801561155d573d6000803e3d6000fd5b505050506115756732b0e94c3ee4b82860c01b61141d565b60ca60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636352211e60c9546040518263ffffffff1660e01b81526004016115d29190611f24565b602060405180830381865afa1580156115ef573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061161391906124c5565b60cf60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061166767f81ff7307df3894360c01b61141d565b600060d360006101000a81548160ff02191690831515021790555050565b61168d61193d565b73ffffffffffffffffffffffffffffffffffffffff166116ab6110ff565b73ffffffffffffffffffffffffffffffffffffffff1614611701576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116f8906128ff565b60405180910390fd5b565b6000609760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081609760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600061180267cf0685a141fb716f60c01b61141d565b6118166770627663d314bbea60c01b61141d565b61182a67bfe8723c2b22322860c01b61141d565b60d154611835611945565b61183f9190612670565b905090565b6000819050919050565b6000819050919050565b611861816117c9565b6118a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161189790612991565b60405180910390fd5b806118cd7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b611844565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b61191a83611989565b6000825111806119275750805b156119385761193683836119d8565b505b505050565b600033905090565b600061195b67dbbbc3e83c81a38760c01b61141d565b61196f67921ec6be1079603960c01b61141d565b611983678770003d37f8794260c01b61141d565b43905090565b61199281611858565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b60606119fd8383604051806060016040528060278152602001612b0c60279139611a05565b905092915050565b60606000808573ffffffffffffffffffffffffffffffffffffffff1685604051611a2f9190612a22565b600060405180830381855af49150503d8060008114611a6a576040519150601f19603f3d011682016040523d82523d6000602084013e611a6f565b606091505b5091509150611a8086838387611a8b565b925050509392505050565b60608315611aed576000835103611ae557611aa5856117c9565b611ae4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611adb90612a85565b60405180910390fd5b5b829050611af8565b611af78383611b00565b5b949350505050565b600082511115611b135781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b479190612ae9565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611b7b82611b50565b9050919050565b611b8b81611b70565b82525050565b6000602082019050611ba66000830184611b82565b92915050565b60008115159050919050565b611bc181611bac565b82525050565b6000602082019050611bdc6000830184611bb8565b92915050565b6000604051905090565b600080fd5b600080fd5b611bff81611b70565b8114611c0a57600080fd5b50565b600081359050611c1c81611bf6565b92915050565b600060208284031215611c3857611c37611bec565b5b6000611c4684828501611c0d565b91505092915050565b6000819050919050565b611c6281611c4f565b8114611c6d57600080fd5b50565b600081359050611c7f81611c59565b92915050565b600060208284031215611c9b57611c9a611bec565b5b6000611ca984828501611c70565b91505092915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611d0582611cbc565b810181811067ffffffffffffffff82111715611d2457611d23611ccd565b5b80604052505050565b6000611d37611be2565b9050611d438282611cfc565b919050565b600067ffffffffffffffff821115611d6357611d62611ccd565b5b611d6c82611cbc565b9050602081019050919050565b82818337600083830152505050565b6000611d9b611d9684611d48565b611d2d565b905082815260208101848484011115611db757611db6611cb7565b5b611dc2848285611d79565b509392505050565b600082601f830112611ddf57611dde611cb2565b5b8135611def848260208601611d88565b91505092915050565b60008060408385031215611e0f57611e0e611bec565b5b6000611e1d85828601611c0d565b925050602083013567ffffffffffffffff811115611e3e57611e3d611bf1565b5b611e4a85828601611dca565b9150509250929050565b6000819050919050565b611e6781611e54565b82525050565b6000602082019050611e826000830184611e5e565b92915050565b60008060008060008060c08789031215611ea557611ea4611bec565b5b6000611eb389828a01611c0d565b9650506020611ec489828a01611c0d565b9550506040611ed589828a01611c70565b9450506060611ee689828a01611c70565b9350506080611ef789828a01611c70565b92505060a0611f0889828a01611c70565b9150509295509295509295565b611f1e81611c4f565b82525050565b6000602082019050611f396000830184611f15565b92915050565b600082825260208201905092915050565b7f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060008201527f64656c656761746563616c6c0000000000000000000000000000000000000000602082015250565b6000611fac602c83611f3f565b9150611fb782611f50565b604082019050919050565b60006020820190508181036000830152611fdb81611f9f565b9050919050565b7f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060008201527f6163746976652070726f78790000000000000000000000000000000000000000602082015250565b600061203e602c83611f3f565b915061204982611fe2565b604082019050919050565b6000602082019050818103600083015261206d81612031565b9050919050565b7f41756374696f6e20697320636c6f736564000000000000000000000000000000600082015250565b60006120aa601183611f3f565b91506120b582612074565b602082019050919050565b600060208201905081810360008301526120d98161209d565b9050919050565b7f596f7520616c726561647920626f7567687420746869732070726f6475637400600082015250565b6000612116601f83611f3f565b9150612121826120e0565b602082019050919050565b6000602082019050818103600083015261214581612109565b9050919050565b7f50726f6475637420616c726561647920736f6c64000000000000000000000000600082015250565b6000612182601483611f3f565b915061218d8261214c565b602082019050919050565b600060208201905081810360008301526121b181612175565b9050919050565b7f4f776e65722063616e2774204269640000000000000000000000000000000000600082015250565b60006121ee600f83611f3f565b91506121f9826121b8565b602082019050919050565b6000602082019050818103600083015261221d816121e1565b9050919050565b7f57454920697320696e73756666696369656e7400000000000000000000000000600082015250565b600061225a601383611f3f565b915061226582612224565b602082019050919050565b600060208201905081810360008301526122898161224d565b9050919050565b60006060820190506122a56000830186611b82565b6122b26020830185611b82565b6122bf6040830184611f15565b949350505050565b6122d081611bac565b81146122db57600080fd5b50565b6000815190506122ed816122c7565b92915050565b60006020828403121561230957612308611bec565b5b6000612317848285016122de565b91505092915050565b7f6661696c656420746f2073656e64000000000000000000000000000000000000600082015250565b6000612356600e83611f3f565b915061236182612320565b602082019050919050565b6000602082019050818103600083015261238581612349565b9050919050565b7f555550535570677261646561626c653a206d757374206e6f742062652063616c60008201527f6c6564207468726f7567682064656c656761746563616c6c0000000000000000602082015250565b60006123e8603883611f3f565b91506123f38261238c565b604082019050919050565b60006020820190508181036000830152612417816123db565b9050919050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b600061247a602e83611f3f565b91506124858261241e565b604082019050919050565b600060208201905081810360008301526124a98161246d565b9050919050565b6000815190506124bf81611bf6565b92915050565b6000602082840312156124db576124da611bec565b5b60006124e9848285016124b0565b91505092915050565b7f596f7520646f6e2774206f776e2074686973204e465420746f2073656c6c0000600082015250565b6000612528601e83611f3f565b9150612533826124f2565b602082019050919050565b600060208201905081810360008301526125578161251b565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061259882611c4f565b91506125a383611c4f565b92508282026125b181611c4f565b915082820484148315176125c8576125c761255e565b5b5092915050565b60006125da82611c4f565b91506125e583611c4f565b92508282019050808211156125fd576125fc61255e565b5b92915050565b6000819050919050565b600060ff82169050919050565b6000819050919050565b600061263f61263a61263584612603565b61261a565b61260d565b9050919050565b61264f81612624565b82525050565b600060208201905061266a6000830184612646565b92915050565b600061267b82611c4f565b915061268683611c4f565b925082820390508181111561269e5761269d61255e565b5b92915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000612700602683611f3f565b915061270b826126a4565b604082019050919050565b6000602082019050818103600083015261272f816126f3565b9050919050565b61273f81611e54565b811461274a57600080fd5b50565b60008151905061275c81612736565b92915050565b60006020828403121561277857612777611bec565b5b60006127868482850161274d565b91505092915050565b7f45524331393637557067726164653a206e657720696d706c656d656e7461746960008201527f6f6e206973206e6f742055555053000000000000000000000000000000000000602082015250565b60006127eb602e83611f3f565b91506127f68261278f565b604082019050919050565b6000602082019050818103600083015261281a816127de565b9050919050565b7f45524331393637557067726164653a20756e737570706f727465642070726f7860008201527f6961626c65555549440000000000000000000000000000000000000000000000602082015250565b600061287d602983611f3f565b915061288882612821565b604082019050919050565b600060208201905081810360008301526128ac81612870565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006128e9602083611f3f565b91506128f4826128b3565b602082019050919050565b60006020820190508181036000830152612918816128dc565b9050919050565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b600061297b602d83611f3f565b91506129868261291f565b604082019050919050565b600060208201905081810360008301526129aa8161296e565b9050919050565b600081519050919050565b600081905092915050565b60005b838110156129e55780820151818401526020810190506129ca565b60008484015250505050565b60006129fc826129b1565b612a0681856129bc565b9350612a168185602086016129c7565b80840191505092915050565b6000612a2e82846129f1565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000612a6f601d83611f3f565b9150612a7a82612a39565b602082019050919050565b60006020820190508181036000830152612a9e81612a62565b9050919050565b600081519050919050565b6000612abb82612aa5565b612ac58185611f3f565b9350612ad58185602086016129c7565b612ade81611cbc565b840191505092915050565b60006020820190508181036000830152612b038184612ab0565b90509291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212205e3e62dfd4e5a0710d2be42fd5b424fba9c2f30c9b36e001cccf8d4331a945b764736f6c63430008110033";

type NFTDutchAuction_ERC20BidsUpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTDutchAuction_ERC20BidsUpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFTDutchAuction_ERC20BidsUpgradeable__factory extends ContractFactory {
  constructor(...args: NFTDutchAuction_ERC20BidsUpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      NFTDutchAuction_ERC20BidsUpgradeable & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): NFTDutchAuction_ERC20BidsUpgradeable__factory {
    return super.connect(
      runner
    ) as NFTDutchAuction_ERC20BidsUpgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTDutchAuction_ERC20BidsUpgradeableInterface {
    return new Interface(_abi) as NFTDutchAuction_ERC20BidsUpgradeableInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): NFTDutchAuction_ERC20BidsUpgradeable {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as NFTDutchAuction_ERC20BidsUpgradeable;
  }
}
