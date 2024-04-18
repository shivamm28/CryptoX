import React, { useEffect, useState } from 'react'
import { Get100Coins } from '../../../Functions/Get100Coins';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import "./styles.css"
function SelectCoins({crypto1 , crypto2 , handleCoinChange}) {
    const style = {
          height: "2.5rem",
          color: "var(--white)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
          },
          "& .MuiSvgIcon-root": {
            color: "var(--white)",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#3a80e9",
            },
          },
    }

    
    const [allCoins , setAllCoins] = useState([]);




    useEffect(() => {
      getData();
    }, [])

    const getData = async ()=>{
        const myCoins = await Get100Coins();
        setAllCoins(myCoins);
    }
    


  return (
    <div className='select-coins-flex'>
        <div className='coins-flex'>
        <p>Coin 1 : </p>
        <Select
          value={crypto1}
          onChange={(event) => handleCoinChange(event, false)}
          label="Crypto 1"
          sx={style}
        >
        {allCoins.map((coin) => (
            <MenuItem value={coin.id}>{coin.name}</MenuItem>
        ))}
        </Select>
        </div>
        <div className='coins-flex'>
        <p>Coin 2 : </p>
        <Select
          value={crypto2}
          onChange={(event) => handleCoinChange(event , true)}
          label="Crypto 2"
          sx={style}
        >
        {allCoins.map((coin) => (
            <MenuItem value={coin.id}>{coin.name}</MenuItem>
        ))}
        </Select>
        </div>
        </div>
  )
}

export default SelectCoins