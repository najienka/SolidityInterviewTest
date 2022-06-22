/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockTestContract,
  MockTestContractInterface,
} from "../MockTestContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_milk",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "gameBurn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "gameMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "gameTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "gameWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516105e93803806105e98339818101604052810190610032919061008d565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506100ff565b600081519050610087816100e8565b92915050565b60006020828403121561009f57600080fd5b60006100ad84828501610078565b91505092915050565b60006100c1826100c8565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6100f1816100b6565b81146100fc57600080fd5b50565b6104db8061010e6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80631bf7dfb014610051578063271292f51461006d5780632e07f60d146100895780634eb90299146100a5575b600080fd5b61006b60048036038101906100669190610332565b6100c1565b005b61008760048036038101906100829190610381565b610155565b005b6100a3600480360381019061009e9190610381565b6101e6565b005b6100bf60048036038101906100ba9190610381565b610277565b005b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631bf7dfb08484846040518463ffffffff1660e01b815260040161011e939291906103db565b600060405180830381600087803b15801561013857600080fd5b505af115801561014c573d6000803e3d6000fd5b50505050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663271292f583836040518363ffffffff1660e01b81526004016101b0929190610412565b600060405180830381600087803b1580156101ca57600080fd5b505af11580156101de573d6000803e3d6000fd5b505050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632e07f60d83836040518363ffffffff1660e01b8152600401610241929190610412565b600060405180830381600087803b15801561025b57600080fd5b505af115801561026f573d6000803e3d6000fd5b505050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634eb9029983836040518363ffffffff1660e01b81526004016102d2929190610412565b600060405180830381600087803b1580156102ec57600080fd5b505af1158015610300573d6000803e3d6000fd5b505050505050565b60008135905061031781610477565b92915050565b60008135905061032c8161048e565b92915050565b60008060006060848603121561034757600080fd5b600061035586828701610308565b935050602061036686828701610308565b92505060406103778682870161031d565b9150509250925092565b6000806040838503121561039457600080fd5b60006103a285828601610308565b92505060206103b38582860161031d565b9150509250929050565b6103c68161043b565b82525050565b6103d58161046d565b82525050565b60006060820190506103f060008301866103bd565b6103fd60208301856103bd565b61040a60408301846103cc565b949350505050565b600060408201905061042760008301856103bd565b61043460208301846103cc565b9392505050565b60006104468261044d565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6104808161043b565b811461048b57600080fd5b50565b6104978161046d565b81146104a257600080fd5b5056fea2646970667358221220f743a774691ecf9df8ec03c7c8c6e317f4b23be522a4c1ad386a01757067f31064736f6c63430008040033";

type MockTestContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockTestContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockTestContract__factory extends ContractFactory {
  constructor(...args: MockTestContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MockTestContract";
  }

  deploy(
    _milk: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockTestContract> {
    return super.deploy(_milk, overrides || {}) as Promise<MockTestContract>;
  }
  getDeployTransaction(
    _milk: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_milk, overrides || {});
  }
  attach(address: string): MockTestContract {
    return super.attach(address) as MockTestContract;
  }
  connect(signer: Signer): MockTestContract__factory {
    return super.connect(signer) as MockTestContract__factory;
  }
  static readonly contractName: "MockTestContract";
  public readonly contractName: "MockTestContract";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockTestContractInterface {
    return new utils.Interface(_abi) as MockTestContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockTestContract {
    return new Contract(address, _abi, signerOrProvider) as MockTestContract;
  }
}