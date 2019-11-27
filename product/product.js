var abi = [
  {
    constant: false,
    inputs: [
      {
        name: "pro",
        type: "string"
      },
      {
        name: "pro1",
        type: "string"
      },
      {
        name: "pro2",
        type: "string"
      }
    ],
    name: "addProduct",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
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
    constant: true,
    inputs: [
      {
        name: "number",
        type: "uint8"
      }
    ],
    name: "getProductString",
    outputs: [
      {
        name: "",
        type: "string"
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
        name: "ProductName",
        type: "string"
      },
      {
        indexed: false,
        name: "producZib",
        type: "string"
      },
      {
        indexed: false,
        name: "Produce",
        type: "string"
      }
    ],
    name: "ProductEvent",
    type: "event"
  }
];
