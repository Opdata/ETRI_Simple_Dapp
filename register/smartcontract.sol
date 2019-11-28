pragma solidity ^0.4.18;

contract agricultureContract {

    uint8 numberOfProducts; // 총 제품의 수입니다.
    address contractOwner;

    struct myStruct {
        string name;
        bytes32 password;
        string email;
        string addr;
    }

    event Inst(
        string name,
        bytes32 password,
        string email,
        string addr
    );

    myStruct[] public productes;

    constructor() public {        
        contractOwner = msg.sender;
    }

    function addProStru (string _initNumber, bytes32 _firstString, string _secondString, string _addr) public {
        bool add = true;
        bytes32 hexpassword;
        for (uint8 i = 0; i < numberOfProducts; i++) {
        
            // 문자열 비교는 해쉬함수(sha3)를 통해서 할 수 있습니다.
            if(keccak256(productes[i].name) == keccak256(_initNumber)){
                add = false;
                break;
            }
        }
        if(add) {
            hexpassword = keccak256(_firstString);
            productes.push(myStruct(_initNumber,hexpassword,_secondString, _addr)) -1;
            numberOfProducts++;
            emit Inst(_initNumber,hexpassword,_secondString, _addr);
        }
    }

    //제품 등록의 수를 리턴합니다.
    function getNumOfProducts() public constant returns(uint8) {
        return numberOfProducts;
    }

    //번호에 해당하는 제품의 이름을 리턴합니다.
    function getProductStruct(uint _index) public view returns (string, bytes32, string, string) {
        return (productes[_index].name, productes[_index].password, productes[_index].email, productes[_index].addr);
    }

    function checkAccount(string _id) public constant returns (bool) {
        bool state = true;
        
        for(uint j=0; j<numberOfProducts; j++){
            if(keccak256(productes[j].name) == keccak256(_id)){
                state = false;
            }
        }
        return state;
    }

    function checkPassword(string _password, string _subpassword) public constant returns (bool) {
        bool state = true;

        if(keccak256(_password) != keccak256(_subpassword)){
                state = false;
            }
        return state;
    }

    //컨트랙트를 삭제합니다.
    function killContract() public {
        if(contractOwner == msg.sender)
            selfdestruct(contractOwner);
    }
}