/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERCTOKEN, ERCTOKENInterface } from "../ERCTOKEN";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002c5e38038062002c5e8339818101604052810190620000379190620003dd565b6200006b7f48bfcf53c0bc6542600f742cfe55944227493928c38d76b0c64feb7e2d10f3da60001b620002a160201b60201c565b6200009f7f4fe11f147145a492bd3be2b06b14377918973593a8ea59bdc6f80eae9469619d60001b620002a160201b60201c565b620000d37f5e972c4a41cc2f280a3be4784114cc557f20f61e3b7bed7ccaf91d3ba839b53760001b620002a160201b60201c565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620001477fc31d3335bee8ece4b4b728eb786a245968d74257cba5bd82c232c05be9983e9860001b620002a160201b60201c565b6200017b7f84736661f4e96eefe1e6c0a4b61529bb654bb75c9777079e08a08aee5773a63360001b620002a160201b60201c565b826003908051906020019062000193929190620002a4565b50620001c87fc1c0074d994e30d56aafafc2185ace0484ee82f253db504ec0ddc35ac1fcd26660001b620002a160201b60201c565b620001fc7f8a31e235a3b9d2ae687605262993f40084e3cd57279f0e7fad4add0621783a9860001b620002a160201b60201c565b816004908051906020019062000214929190620002a4565b50620002497f6957169b94a5955f0f922edd09cbd311838ba21f828be0f0219a9b630e86c4d560001b620002a160201b60201c565b6200027d7f5ff2a8927d263c5b92222efc41398604349254b05e978c7d00e197970071a30c60001b620002a160201b60201c565b80600660006101000a81548160ff021916908360ff160217905550505050620005fc565b50565b828054620002b29062000507565b90600052602060002090601f016020900481019282620002d6576000855562000322565b82601f10620002f157805160ff191683800117855562000322565b8280016001018555821562000322579182015b828111156200032157825182559160200191906001019062000304565b5b50905062000331919062000335565b5090565b5b808211156200035057600081600090555060010162000336565b5090565b60006200036b62000365846200048e565b62000465565b9050828152602081018484840111156200038457600080fd5b62000391848285620004d1565b509392505050565b600082601f830112620003ab57600080fd5b8151620003bd84826020860162000354565b91505092915050565b600081519050620003d781620005e2565b92915050565b600080600060608486031215620003f357600080fd5b600084015167ffffffffffffffff8111156200040e57600080fd5b6200041c8682870162000399565b935050602084015167ffffffffffffffff8111156200043a57600080fd5b620004488682870162000399565b92505060406200045b86828701620003c6565b9150509250925092565b60006200047162000484565b90506200047f82826200053d565b919050565b6000604051905090565b600067ffffffffffffffff821115620004ac57620004ab620005a2565b5b620004b782620005d1565b9050602081019050919050565b600060ff82169050919050565b60005b83811015620004f1578082015181840152602081019050620004d4565b8381111562000501576000848401525b50505050565b600060028204905060018216806200052057607f821691505b6020821081141562000537576200053662000573565b5b50919050565b6200054882620005d1565b810181811067ffffffffffffffff821117156200056a5762000569620005a2565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b620005ed81620004c4565b8114620005f957600080fd5b50565b612652806200060c6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806340c10f191161007157806340c10f191461016857806370a082311461018457806395d89b41146101b45780639dc29fac146101d2578063a9059cbb146101ee578063dd62ed3e1461021e576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b661024e565b6040516100c391906120c4565b60405180910390f35b6100e660048036038101906100e19190611ecc565b6102dc565b6040516100f391906120a9565b60405180910390f35b6101046103cf565b6040516101119190612206565b60405180910390f35b610134600480360381019061012f9190611e7d565b6103d5565b60405161014191906120a9565b60405180910390f35b61015261064c565b60405161015f9190612221565b60405180910390f35b610182600480360381019061017d9190611ecc565b61065f565b005b61019e60048036038101906101999190611e18565b610b21565b6040516101ab9190612206565b60405180910390f35b6101bc610bee565b6040516101c991906120c4565b60405180910390f35b6101ec60048036038101906101e79190611ecc565b610c7c565b005b61020860048036038101906102039190611ecc565b611271565b60405161021591906120a9565b60405180910390f35b61023860048036038101906102339190611e41565b611364565b6040516102459190612206565b60405180910390f35b6003805461025b9061236a565b80601f01602080910402602001604051908101604052809291908181526020018280546102879061236a565b80156102d45780601f106102a9576101008083540402835291602001916102d4565b820191906000526020600020905b8154815290600101906020018083116102b757829003601f168201915b505050505081565b600061030a7f6edae17b13773a1587130531e6f2a467ebedd2366431eb59ebff8f585c98441860001b61146f565b6103367f4b54fd9f1a73724c89524756da672e48176334a5fd9fcacac4f2a5416901bf2860001b61146f565b6103627f0283ea7af4adf4327369756505ed3e9c9aee4f80efe2bbe05aa12e8e36f6d0e460001b61146f565b61036d338484611472565b6103997f7de7134ffd4fed9396fe97a732e88a389143b0818aea22743d427753e9a950fb60001b61146f565b6103c57f7e3753c22e9ed51fa5ff96230cc0c71ec5224c4b5b1482580d794ac86641133a60001b61146f565b6001905092915050565b60055481565b60006104037f1fe60185cdd0ff91a877c2afcf230e2086dc01f77059499676b4754243c6103d60001b61146f565b61042f7f029039f221ee03d7dd50e3511abf14450008ed20fd205a4617df63ff7b13f27660001b61146f565b61045b7f92f501fc243153fdfd18c3111feb0271891656caa69ac0cf9387cdb7b6d3599260001b61146f565b6104877ffddeafab420338b98657f751640b5993b24e4804d75e6cc21e36860285f4459560001b61146f565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614156104f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ee90612186565b60405180910390fd5b6105237fa45faaf14fd0005ff0d59db451fe9a1b2b1b36e4b2fb3bbdff36d590ba81964a60001b61146f565b61054f7f7f445ea0c1513b22f934d519b4e2bbc231bd7c2331249212e964cb54e9186d9b60001b61146f565b61057b7f3bad0afcf9afb1e4f4bebfd47028b33120fd5b1251e007bf61e9314c0f92b43660001b61146f565b610586843384611759565b6105b27fca49774d2d65f3043bcd2924f2f618511de08efb2d0eb69560b940dbc301b21560001b61146f565b6105de7ffb91d0a2c39ad938aab17d4189b5feb1b75ce5753a74f99787dd736c888e699c60001b61146f565b6105e9848484611952565b6106157f791a0cc093e529e747b491d89b8a3c0c8d07a1ef1bfe13a956fd05e971dfbe8360001b61146f565b6106417f5ececa9c2c4c6efdce4cf624dcc1bdcef09b4cfcf162bd9e8de1f769e7e742a760001b61146f565b600190509392505050565b600660009054906101000a900460ff1681565b61068b7fdb180c1dd25271d6c018cd414138729141f4807cd025bfe286c4f5599ba50e6560001b61146f565b6106b77f514013a3c62aa676168d89851437b7d6e16f2ef0e8e7fc1d095117ccb87d0efd60001b61146f565b6106e37f0f988ae2d97c3496e39f8ad9875d4c15d94acd9179e11b6c5816feebb3b7f54160001b61146f565b61070f7f5dc66bcbf02e2c5e99795a3bc84055c939d97fdb2d37ba10cec95ccd2633592260001b61146f565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461079d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079490612166565b60405180910390fd5b6107c97f6c662197391f57082f7aab0c2bb59316d55ea14b58733f9bc7402c6af29a692760001b61146f565b6107f57fc0e21092a597229bceaf30a9604abf738bd16217219530b88471b5623ba709d860001b61146f565b6108217f5b74fc170c01bec8e8378c04de6414fd695c8c1190781972193dc240f8b1149760001b61146f565b61084d7fa206bb05aae96e044ddd2ffb1a563e4df2b6ef820bece6c0849c1d233099696960001b61146f565b6108797f9b661f50b225da6af8a042365a313f208fc4252dbe3f6ae5814e4b4fd419c2d360001b61146f565b6108a57f554cd4c7be6ef52eb6f2f06c01c1ee0c90ad6ecec6b6f768b941ecdda461e86e60001b61146f565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610915576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090c90612146565b60405180910390fd5b6109407e350b3dcc4d4b8fadb8eecf20cc3917a9adb9be49b30be8b9cf34bca88296e460001b61146f565b61096c7fe245e5afcaf3b82a70a518277239625b30351500b18593be061a507b077f062c60001b61146f565b6109987ff2f0deecd271513d02734da86f19d65c2547b4936354846597277810610d512360001b61146f565b80600560008282546109aa9190612258565b925050819055506109dd7f64f6b01feea46cd08d3372f26ec92cae0012bf1a214d87cda9b41f05f1dac64e60001b61146f565b610a097f8a85643e8d5cc523399494120a170340a5b8afce11f3ff483270ac971213728e60001b61146f565b80600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610a589190612258565b92505081905550610a8b7f18542e653aa49f16a171b0f0f5c33c51d3e9c904246e19e061eed9d01e729a1b60001b61146f565b610ab77f2d1d429c1312e27e334e012e2ae2a2231993a6f9b41b5882f3efa068a8e7d39160001b61146f565b8173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610b159190612206565b60405180910390a35050565b6000610b4f7f25ed8c1edb507097e1f2d7ef7637aa94307d86d5055ea7ad7bf95a571ba3068260001b61146f565b610b7b7f519c1b67450d3382e0e0e0fc0bccac05252a11ceac16937ecc3d79fd0079683c60001b61146f565b610ba77f61690c807362b595de583252014bcff09a316b10f816a2f65b87784318e5db6860001b61146f565b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60048054610bfb9061236a565b80601f0160208091040260200160405190810160405280929190818152602001828054610c279061236a565b8015610c745780601f10610c4957610100808354040283529160200191610c74565b820191906000526020600020905b815481529060010190602001808311610c5757829003601f168201915b505050505081565b610ca87fdb180c1dd25271d6c018cd414138729141f4807cd025bfe286c4f5599ba50e6560001b61146f565b610cd47f514013a3c62aa676168d89851437b7d6e16f2ef0e8e7fc1d095117ccb87d0efd60001b61146f565b610d007f0f988ae2d97c3496e39f8ad9875d4c15d94acd9179e11b6c5816feebb3b7f54160001b61146f565b610d2c7f5dc66bcbf02e2c5e99795a3bc84055c939d97fdb2d37ba10cec95ccd2633592260001b61146f565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610dba576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610db190612166565b60405180910390fd5b610de67f6c662197391f57082f7aab0c2bb59316d55ea14b58733f9bc7402c6af29a692760001b61146f565b610e127fc0e21092a597229bceaf30a9604abf738bd16217219530b88471b5623ba709d860001b61146f565b610e3e7fd61600bdc50d9811db9cab0937c82f7808db737fda6d4f97ae11fe1d3a05fe6b60001b61146f565b610e6a7fcbb11807b3ac907ee7ba1b79def16d92dd99e9dfaf8155c5a7f8ff9405b3e09b60001b61146f565b610e967f77f12f2326a331bf22497af2874dc191c8b07d62bf63921d21a5984c24ce87b760001b61146f565b610ec27f4a0650d8e04edb44e2a052d16e0a01225775ee904642fdc9d8cf0a9ae55be6a260001b61146f565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f32576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f2990612126565b60405180910390fd5b610f5e7f3a58b4c4e914b1732f28f8cd716186fb0e5645831cbb2209ada751fbf412058960001b61146f565b610f8a7fa284c837137cd12df1d86708fd54cfeba02cc38014b7694985f63559de59675c60001b61146f565b610fb67f86d2c8cb82482aed35357155ac91c2a8365e1bcf4791e1126cd50973483c73d860001b61146f565b610fe27f95e6a92eb0630d6b2f808bcfdcdd68b14ef89337731e625b265e8a8e7d9f91af60001b61146f565b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054811115611064576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161105b90612106565b60405180910390fd5b6110907f2db6689944fcce5560dd78991a44669a0d754c26784aa583bfae6920e0f372d060001b61146f565b6110bc7fb7848e0da5daed627690fe0acf7f8d93122179a77eecb281a9e83006c147c20160001b61146f565b6110e87fe59a89a848337233b8ca46d5ff34721953e8b58498c9e6177ac67e3d84e204d260001b61146f565b80600560008282546110fa91906122ae565b9250508190555061112d7fdde7e76519f6171388b24552626b9da181df4d235f7012e396ab17774c48703b60001b61146f565b6111597fb93196bff094292c74fc5540e60b122df7b1abde9685b7ccb3bf41a1bba2a7c160001b61146f565b80600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546111a891906122ae565b925050819055506111db7fbde9abf675ce520508d7f567180046992d5f3b9905385138d04e364c9e854ef360001b61146f565b6112077f17e15f8c984e41d703d92aaa99baaffdfd35fe96e4797c10df35f76c4e25dcd760001b61146f565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516112659190612206565b60405180910390a35050565b600061129f7f294c2626ee10791ea37fb908aae0255d58e662df2b31c7f6f73f16017a7bf7d260001b61146f565b6112cb7fbd7cf8fcb217961136ea3a35f103c25bc422d9e9d133aead9c7bb9b3291276f460001b61146f565b6112f77fa6e507f508f955edf7cc9258778b9d12d97c74931911b23f3bf302ba21e5528360001b61146f565b611302338484611952565b61132e7f42e00be7ae286c4d1caf2664925e45d426d43e60788657dd8987c5dc7271d68f60001b61146f565b61135a7ff6136e80eb564d786201d5198f555cef39da34fbb290292feb14312e13dc4d1260001b61146f565b6001905092915050565b60006113927fb02fbf9b1ae93e08c6c2e36df2653746b5787d22f75adce24fc0a45b5277c98360001b61146f565b6113be7f4f84a53640c2e4b2b39fccce5fb6a8b95288fb00c4e0ba2579ce24aff152cd6960001b61146f565b6113ea7fe11e22dc9d6b8f5ea9ecf539095871a73308c46250dead014d51a1149654d75360001b61146f565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b50565b61149e7ff26212f2ea0d9a31617b8a6e4d498fee575c0b4b4397ab3e8f1f97af1a95731360001b61146f565b6114ca7fe94438d9fe4f66bedd2b861bfa791cb91a094a2d33ee2c70ea36b983cebf1fec60001b61146f565b6114f67f42fb4643aab5cdaacc3679f8993209a63966c7d7f5b2b139e2dc7454ec56861b60001b61146f565b6115227f1a9230ba4fadfba4f1df1fa49fffd266f823e854914be031e20790d7c33c503160001b61146f565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611592576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611589906121a6565b60405180910390fd5b6115be7fb8283197254d3b2d2dff7e6f3a8ed952d1aa0f4e0f7f153b11f16feac54cb7ed60001b61146f565b6115ea7f0c34b391af67d588a2081c2fc5a8399732cb63599efff6890f4eb74abba9ae2560001b61146f565b6116167f49998a3d8a38faabd359fe3d016df68bbfa6acddadf65ac752136646b4cf7f8f60001b61146f565b80600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506116c37f264889656012aeab8f628a2d2c28323cfade0fe4159aeaf9ce496b777a6bb4bc60001b61146f565b6116ef7f41e4b240b4ce02f420b4cf5f31184b0477a2033d4fa759c4635fd9fe2becdf3460001b61146f565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161174c9190612206565b60405180910390a3505050565b6117857fdc445d3f3ac7c7314f8990b926ea01009d5a0deb50b0cd3ff06e2901594c4a2760001b61146f565b6117b17f3fdc710b68e8b82bae35d8bc4dfa277a4dfbd85696eacfa95040a709b7df80df60001b61146f565b6117dd7f40e8fbebd1c381b6cc41e2e230c2566ee7c889441d2023379ba9bc5a237cb26760001b61146f565b60006117e98484611364565b90506118177f61ced5ba5463bac4c953e111d8dfdc0c9e9ab13b44cd0f0fabf0fdc942ff6e0660001b61146f565b6118437f451a98ae21d95b91263cbd40dcfd6dc551107e974425b47ea2c5fa663d4da46d60001b61146f565b61186f7f4e1461e0e2e668ae86be6169e2405db901a4cc24c2fde89e30db123353f0c5a760001b61146f565b808211156118b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118a9906121c6565b60405180910390fd5b6118de7fed51a301f46922ace92db6f0b535dc53329b360dc4c6f36a7872c45feb4ccecd60001b61146f565b61190a7f0ef08970934d0a2e2d06f408182514c38cebb5a691ac74a16f7ba9d715e8ab4660001b61146f565b6119367fa1a02e7f671cabac57b8b6a97e4f917a639c84c015741ca6a87cf17affd458e860001b61146f565b61194c8484848461194791906122ae565b611472565b50505050565b61197e7f5e60013c9e5bc7f1eca8f2a6a832bbc41c2a3a7392fbd62cd024afc48ff6b55960001b61146f565b6119aa7f232e7d72231d2cc34b4be8568ae69edcb44356935f2339f1b1622dd48a0d136360001b61146f565b6119d67f70144f5a57bfa643208b6a11cc5b298d659435402b35e573c84e64ce4e35dd1160001b61146f565b611a027f261c0eeb74d5f642b60b6076cbe50394168bf2a977a40da889b50bf9965dfc9760001b61146f565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611a72576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a69906121e6565b60405180910390fd5b611a9e7f872b34448d1ceb2d55d27d8af20d30404e0fd93cd9588e9fea5f7b9523322fa860001b61146f565b611aca7f806b323be01b8f84b175431bd5754f2f7929ecc38076f1218531aa34a04dcfba60001b61146f565b611af67f2ffd8a0510d0292f9e86c7a43bf22bae30bd49392805b8304a56e1485e9b0daa60001b61146f565b611b227f02d8d3a22b6d5bb3ddee3da34f9af29e88fe850f2ac15c4c85700516b215f50b60001b61146f565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054811115611ba4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b9b906120e6565b60405180910390fd5b611bd07f72b3cc64f78f047fbc6c6a203f6155c467e98dbb57ad5a45fea89be3f582c76f60001b61146f565b611bfc7f06e3559288bbafd5132ef3a484556b3c7a2585121209f26364822226be8804c160001b61146f565b611c287f0c08fb0b0c3ee19bbd206ab877f71f847805922aa64e54832cdefce1d060d75e60001b61146f565b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611c7791906122ae565b92505081905550611caa7fd447188793bf9134789400e6d4b9f3e5cb81a20fdfcdc1ccb356ad0a2b1b26e860001b61146f565b611cd67fa2b32a6a744c254171a198bd4746faec62e3b1b20c763a6d02cad6b5eb8ae43560001b61146f565b80600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611d259190612258565b92505081905550611d587f74a1183012bf704506e1abcb49969a99975a3f0896f7dab8cf6837a79379b3a160001b61146f565b611d847fa1c2d18cde51c8731c80801ecf75fbbfd8b83566a9d5a899bd1b14126490afef60001b61146f565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051611de19190612206565b60405180910390a3505050565b600081359050611dfd816125ee565b92915050565b600081359050611e1281612605565b92915050565b600060208284031215611e2a57600080fd5b6000611e3884828501611dee565b91505092915050565b60008060408385031215611e5457600080fd5b6000611e6285828601611dee565b9250506020611e7385828601611dee565b9150509250929050565b600080600060608486031215611e9257600080fd5b6000611ea086828701611dee565b9350506020611eb186828701611dee565b9250506040611ec286828701611e03565b9150509250925092565b60008060408385031215611edf57600080fd5b6000611eed85828601611dee565b9250506020611efe85828601611e03565b9150509250929050565b611f11816122f4565b82525050565b6000611f228261223c565b611f2c8185612247565b9350611f3c818560208601612337565b611f45816123fa565b840191505092915050565b6000611f5d601e83612247565b9150611f688261240b565b602082019050919050565b6000611f80601583612247565b9150611f8b82612434565b602082019050919050565b6000611fa3601b83612247565b9150611fae8261245d565b602082019050919050565b6000611fc6601983612247565b9150611fd182612486565b602082019050919050565b6000611fe9601483612247565b9150611ff4826124af565b602082019050919050565b600061200c602583612247565b9150612017826124d8565b604082019050919050565b600061202f602283612247565b915061203a82612527565b604082019050919050565b6000612052601d83612247565b915061205d82612576565b602082019050919050565b6000612075602383612247565b91506120808261259f565b604082019050919050565b61209481612320565b82525050565b6120a38161232a565b82525050565b60006020820190506120be6000830184611f08565b92915050565b600060208201905081810360008301526120de8184611f17565b905092915050565b600060208201905081810360008301526120ff81611f50565b9050919050565b6000602082019050818103600083015261211f81611f73565b9050919050565b6000602082019050818103600083015261213f81611f96565b9050919050565b6000602082019050818103600083015261215f81611fb9565b9050919050565b6000602082019050818103600083015261217f81611fdc565b9050919050565b6000602082019050818103600083015261219f81611fff565b9050919050565b600060208201905081810360008301526121bf81612022565b9050919050565b600060208201905081810360008301526121df81612045565b9050919050565b600060208201905081810360008301526121ff81612068565b9050919050565b600060208201905061221b600083018461208b565b92915050565b6000602082019050612236600083018461209a565b92915050565b600081519050919050565b600082825260208201905092915050565b600061226382612320565b915061226e83612320565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156122a3576122a261239c565b5b828201905092915050565b60006122b982612320565b91506122c483612320565b9250828210156122d7576122d661239c565b5b828203905092915050565b60006122ed82612300565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101561235557808201518184015260208101905061233a565b83811115612364576000848401525b50505050565b6000600282049050600182168061238257607f821691505b60208210811415612396576123956123cb565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f43616e6e6f74207472616e73666572206f7574206f662062616c616e63650000600082015250565b7f416d6f756e74206f7574206f662062616c616e63650000000000000000000000600082015250565b7f43616e74206275726e2066726f6d207a65726f20616464726573730000000000600082015250565b7f43616e74206d696e7420746f207a65726f206164647265737300000000000000600082015250565b7f596f7520617265206e6f7420616e206f776e6572000000000000000000000000600082015250565b7f43616e6e6f74207472616e736665722066726f6d20746865206e756c6c20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f43616e6e6f7420617070726f766520746f20746865206e756c6c20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f43616e6e6f74207370656e64206f7574206f6620616c6c6f77616e6365000000600082015250565b7f43616e6e6f74207472616e7366657220746f20746865206e756c6c206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6125f7816122e2565b811461260257600080fd5b50565b61260e81612320565b811461261957600080fd5b5056fea2646970667358221220b9ad340c1ceb264df64cad1e5c42f20af26b280c186b2354acc82042b93f100664736f6c63430008040033";

export class ERCTOKEN__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERCTOKEN> {
    return super.deploy(
      _name,
      _symbol,
      _decimals,
      overrides || {}
    ) as Promise<ERCTOKEN>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _decimals,
      overrides || {}
    );
  }
  attach(address: string): ERCTOKEN {
    return super.attach(address) as ERCTOKEN;
  }
  connect(signer: Signer): ERCTOKEN__factory {
    return super.connect(signer) as ERCTOKEN__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERCTOKENInterface {
    return new utils.Interface(_abi) as ERCTOKENInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERCTOKEN {
    return new Contract(address, _abi, signerOrProvider) as ERCTOKEN;
  }
}