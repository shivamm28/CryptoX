import React, { useState } from 'react'
import Header from '../Components/Common/Header'
import SelectCoins from '../Components/Compare/SelectCoins'
import SelectDays from '../Components/Coin/SelectDays';

function Compare() {
    const [crypto1 , setCrypto1] = useState("bitcoin");
    const [crypto2 , setCrypto2] = useState("ethereum");

    const[crypto1Data , setCrypto1Data] = useState({});
    const[crypto2Data , setCrypto2Data] = useState({});

    const handleCoinChange = async (event,isCoinTwo) =>{
        if(isCoinTwo){
            setCrypto2(event.target.value);
        }else{
            setCrypto1(event.target.value);
        }
        
        
    }


    const[days,setDays] = useState(30);

    const handleDaysChange = (event) =>{
        setDays(event.target.value);
    }

  return (
    <div>
        <Header />
        <div className='compare-select-menu'>
        <SelectCoins 
        crypto1={crypto1} 
        crypto2={crypto2} 
        setCrypto1={setCrypto1} 
        setCrypto2={setCrypto2}
        handleCoinChange={handleCoinChange}
        />
        <SelectDays days={days} handleDaysChange={handleDaysChange} />
        </div>
        <div>
        <h1>This Feature is Under Construction!</h1>
        </div>
    </div>
  )
}

export default Compare