import React , {useEffect , useState} from "react";
import {ethers} from "ethers"

import { contractABI , contractAddress } from "../utils/constants.js";

export const TransactionContext = React.createContext();

const {ethereum} = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log({
        provider,
        signer,
        transactionContract
    })
}

export const TransactionProvider = ({children}) => {

    const [connectedAccount, setConnectedAccount] = useState("")
    const checkIfWalletIsConnect = async () => {
        try {
          if (!ethereum) return alert("Please install MetaMask.");
    
          const accounts = await ethereum.request({ method: "eth_accounts" });
    
          if (accounts.length) {
            setConnectedAccount(accounts[0]);
    
            // getAllTransactions();
          } else {
            console.log("No accounts found");
          }
        } catch (error) {
          console.log(error);
        }
      };

    const connectWallet = async () => {
        try {
            if(!ethereum) alert("Please install MetaMask");
            const accounts = await ethereum.request({method: "eth_requestAccounts"});
            if(accounts.length){
            setConnectedAccount(accounts[0]);
             // getAllTransactions();
            }else{
               console.log("No accounts found");
            }
        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object.");
        }
    }

    useEffect(() => {

        checkIfWalletIsConnect();
    },[]);

    return (
    <TransactionContext.Provider value={{ connectWallet }}>
        {children}  
    </TransactionContext.Provider>)
}