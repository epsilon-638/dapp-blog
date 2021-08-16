import Web3 from 'web3';
import { useEffect, useState } from 'react';

export const useWeb3 = () => {
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    let instance;
    if (window.ethereum) {
      try {
        instance = new Web3(window.ethereum)
      } catch(e) {
        console.log(e)
      }

    } else if (window.web3) {
      instance = new Web3(window.web3)
    } else {
      instance = new Web3(new Web3.provider.HttpProvider('http//:127.0.0.1:7545'))
    }
    setWeb3(instance)
  }, [])
  return web3
}

