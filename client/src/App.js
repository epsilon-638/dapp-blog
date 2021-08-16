import { useWeb3 } from './useWeb3'
import './App.css';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import Post from './components/Post';
import ContractABI from './Contract'

function App() {
  const web3 = useWeb3();
  const [address, setAddress] = useState(null);
  //const [contract, setContract] = useState(null);
  const PostProps = {
    dislikes: 10,
    likes: 123,
    avatar: "JT"
  }

  const connectWallet = async () => {
    if (window.ethereum) {
      await window.ethereum.enable();
      web3.eth.getAccounts()
        .then(accounts => {
          setAddress(accounts[0])
        })
      //setContract((web3) => GetContract)
    }
  }

  const addProfile = async (e) => {
    e.preventDefault();
    const contractAddress = "0xE031666e0415e75e4b408cD1BeE2E2A0350799F5";
    const contract = new web3.eth.Contract(ContractABI,contractAddress);
    await contract.methods.addProfile().call()
                                  .then((r) => console.log(r));
  }
  if (!address) {
    return (
      <div className="App">
        <div>
          <Button variant="contained" onClick={connectWallet}>Connect To MetaMask</Button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>
        <h3>Connected to: {address}</h3>
        <Post props={PostProps}/>
        </div>
        <div>
          <Button variant="contained" onClick={fetchProfiles}>Fetch Profiles</Button>
        </div>
      </div>
    )
  }
}

export default App;
