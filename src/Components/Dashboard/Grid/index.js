import React from 'react'
import "./styles.css"
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Link } from 'react-router-dom';
function Grid({coin}) {
  return (
    <Link to={`/coin/${coin.id}`}>
    <div className={`grid-container ${coin.price_change_percentage_24h<0 && "grid-container-red"}`}>
        <div className='info-flex'>
            <img src={coin.image} className='logo-col' />
            <div className='name-col'>
                <p className='coin-symbol'>{coin.symbol}</p>
                <p className='coin-name'>{coin.name}</p>
            </div>
        </div>

        
            {coin.price_change_percentage_24h>0?
            <div className='chip-flex'>
            <div className='chip-price'>
                {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className='icon-chip'>
                <TrendingUpRoundedIcon />
            </div>
            </div>
            :
            <div className='chip-flex'>
            <div className='chip-price chip-price-red'>
                {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className='icon-chip icon-chip-red'>
                <TrendingDownRoundedIcon />
            </div>
            </div>
            }
            <div className='info-container'>
            <h1 style={{color:coin.price_change_percentage_24h>0?"var(--green)":"var(--red)"}}>${coin.current_price.toLocaleString()}</h1>
            <div className='market-info'>
                <p>Total Volume : {coin.total_volume.toLocaleString()}</p>
                <p>Market Cap : {coin.market_cap.toLocaleString()}</p>
            </div>
            </div>
    </div>
    </Link>
  )
}

export default Grid