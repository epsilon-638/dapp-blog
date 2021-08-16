
const contractAddress = "0xE031666e0415e75e4b408cD1BeE2E2A0350799F5";
const ContractABI = [{"inputs": [], "stateMutability": "nonpayable", "type": "constructor"}, {"anonymous": false, "inputs": [{"indexed": false, "internalType": "address", "name": "_address", "type": "address"}, {"indexed": false, "internalType": "string", "name": "postBody", "type": "string"}, {"indexed": false, "internalType": "uint64", "name": "likes", "type": "uint64"}, {"indexed": false, "internalType": "uint64", "name": "dislikes", "type": "uint64"}, {"indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256"}, {"indexed": false, "internalType": "uint256", "name": "postId", "type": "uint256"}], "name": "PostAppended", "type": "event"}, {"anonymous": false, "inputs": [{"indexed": false, "internalType": "address", "name": "likedBy", "type": "address"}, {"indexed": false, "internalType": "uint256", "name": "postId", "type": "uint256"}], "name": "PostDisliked", "type": "event"}, {"anonymous": false, "inputs": [{"indexed": false, "internalType": "address", "name": "likedBy", "type": "address"}, {"indexed": false, "internalType": "uint256", "name": "postId", "type": "uint256"}], "name": "PostLiked", "type": "event"}, {"anonymous": false, "inputs": [{"indexed": false, "internalType": "bytes32", "name": "username", "type": "bytes32"}, {"indexed": false, "internalType": "bytes32", "name": "bio", "type": "bytes32"}, {"indexed": false, "internalType": "address[]", "name": "following", "type": "address[]"}, {"indexed": false, "internalType": "address[]", "name": "followers", "type": "address[]"}], "name": "ProfileAppended", "type": "event"}, {"inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "name": "posts", "outputs": [{"internalType": "address", "name": "_address", "type": "address"}, {"internalType": "string", "name": "postBody", "type": "string"}, {"internalType": "uint64", "name": "likes", "type": "uint64"}, {"internalType": "uint64", "name": "dislikes", "type": "uint64"}, {"internalType": "uint256", "name": "timestamp", "type": "uint256"}, {"internalType": "uint256", "name": "postId", "type": "uint256"}], "stateMutability": "view", "type": "function", "constant": true}, {"inputs": [{"internalType": "address", "name": "", "type": "address"}], "name": "profiles", "outputs": [{"internalType": "bytes32", "name": "username", "type": "bytes32"}, {"internalType": "bytes32", "name": "bio", "type": "bytes32"}], "stateMutability": "view", "type": "function", "constant": true}, {"inputs": [{"internalType": "string", "name": "postBody", "type": "string"}], "name": "appendPost", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "bytes32", "name": "username", "type": "bytes32"}, {"internalType": "bytes32", "name": "bio", "type": "bytes32"}], "name": "addProfile", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "uint64", "name": "id", "type": "uint64"}], "name": "likePost", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "uint64", "name": "id", "type": "uint64"}], "name": "dislikePost", "outputs": [], "stateMutability": "nonpayable", "type": "function"}]

const GetContract = async (web3) => {
  const contract = new web3.eth.Contract(ContractABI,contractAddress);
  return contract;
}

export default ContractABI;