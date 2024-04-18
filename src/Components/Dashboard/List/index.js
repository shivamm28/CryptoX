import React from 'react'
import "./styles.css"
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from '@mui/material';
import { ConvertNumbers } from '../../../Functions/ConvertNumbers';
import { Link } from 'react-router-dom';
function List({coin}) {
  return (
    <Link to={`/coin/${coin.id}`}>
    <tr className='list-row'>
        <td className='td-image'>
            <img src={coin.image} className='logo-col' />
        </td>
        <Tooltip title="Name and symbol">
        <td>
        <div className='name-col'>
                <p className='coin-symbol'>{coin.symbol}</p>
                <p className='coin-name'>{coin.name}</p>
        </div>
        </td>
        </Tooltip>

        <Tooltip title="Trends">
            {coin.price_change_percentage_24h>0?
            <td className='chip-flex'>
            <div className='chip-price'>
                {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className='icon-chip td-icon'>
                <TrendingUpRoundedIcon />
            </div>
            </td>
            
            :
            <td className='chip-flex'>
            <div className='chip-price chip-price-red'>
                {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className='icon-chip icon-chip-red td-icon'>
                <TrendingDownRoundedIcon />
            </div>
            </td>
            }
            </Tooltip>
            <Tooltip title="Price">
            <td>
            <h1 className='td-center-align' style={{color:coin.price_change_percentage_24h>0?"var(--green)":"var(--red)"}}>${coin.current_price.toLocaleString()}</h1>
            </td>
            </Tooltip>
            <td>
                <p className='market-info td-data-right td-total-volume'>{coin.total_volume.toLocaleString()}</p>
                </td>
                <td className='td-market-desktop '>
                <p className='market-info td-data-right'>{coin.market_cap.toLocaleString()}</p>
            </td>
                <td className='td-market-mobile'>
                <p className='market-info td-data-right'>${ConvertNumbers(coin.market_cap)}</p>
            </td>
    </tr>
    </Link>
  )
}

export default List