var abi = [
  {
    constant: true,
    inputs: [
      {
        name: "_index",
        type: "uint256"
      }
    ],
    name: "getProductStruct",
    outputs: [
      {
        name: "",
        type: "string"
      },
      {
        name: "",
        type: "bytes32"
      },
      {
        name: "",
        type: "string"
      },
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "killContract",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    name: "productes",
    outputs: [
      {
        name: "name",
        type: "string"
      },
      {
        name: "password",
        type: "bytes32"
      },
      {
        name: "email",
        type: "string"
      },
      {
        name: "addr",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_password",
        type: "string"
      },
      {
        name: "_subpassword",
        type: "string"
      }
    ],
    name: "checkPassword",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_id",
        type: "string"
      }
    ],
    name: "checkAccount",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getNumOfProducts",
    outputs: [
      {
        name: "",
        type: "uint8"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_initNumber",
        type: "string"
      },
      {
        name: "_firstString",
        type: "bytes32"
      },
      {
        name: "_secondString",
        type: "string"
      },
      {
        name: "_addr",
        type: "string"
      }
    ],
    name: "addProStru",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "name",
        type: "string"
      },
      {
        indexed: false,
        name: "password",
        type: "bytes32"
      },
      {
        indexed: false,
        name: "email",
        type: "string"
      },
      {
        indexed: false,
        name: "addr",
        type: "string"
      }
    ],
    name: "Inst",
    type: "event"
  }
];
