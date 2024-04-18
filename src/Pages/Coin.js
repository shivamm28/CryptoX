import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Components/Common/Header';
import Loader from '../Components/Common/Loader';
import { coinObject } from '../Functions/convertObject';
import List from '../Components/Dashboard/List';
import CoinInfo from '../Components/Coin/CoinInfo';
import { GetCoinData } from '../Functions/GetCoinData';
import { GetCoinPrices } from '../Functions/GetCoinPrices';
import LineChart from '../Components/Coin/LineChart';
import { ConvertDate } from '../Functions/ConvertDate';
import SelectDays from '../Components/Coin/SelectDays';
import { settingChartData } from '../Functions/SettingChartData';
function CoinPage() {
    const {id} = useParams();

    const [isLoading , setIsLoading] = useState(true);
    const [coinData , setCoinData] = useState([]);
    const[days , setDays] = useState(7);
    const[chartData , setChartData] = useState({});


    useEffect(() => {
     if(id){
        getData()
    }
    }, [id])

    async function getData(){
        const data = await GetCoinData(id);
        if(data){
            coinObject(data , setCoinData);
            const prices = await GetCoinPrices(id , days);
            if(prices){
                console.log("woohoo")
                setChartData({
                        labels: prices.map((price) => ConvertDate(price[0]) ),
                        datasets: [{
                            data: prices.map((price) => price[1]),
                            fill: false,
                            borderColor: "#3a80e9",
                            backgroundColor: "rgb(58,128,233,0.1)",
                            pointRadius : 2,
                            borderWidth: 2,
                            tension: 0.25,
                            fill: true,
                        },
                    ],
                    })
                setIsLoading(false);
            }
        }
    }


    const handleDaysChange = async (event) => {
        setIsLoading(true);
        const prices = await GetCoinPrices(id,event.target.value);
        if(prices.length > 0){
                settingChartData(setChartData , prices)
                setIsLoading(false);
        }
        setDays(event.target.value);
    };
    
  return (
    <div>
        <Header />
        {
        isLoading ? <Loader /> : 
        <>
        <div className='grey-wrapper'>
        <List coin={coinData} />
        </div>
        <div className='grey-wrapper'>
        <SelectDays days={days}  handleDaysChange={handleDaysChange} />
        <LineChart  chartData={chartData} />
        </div>
        <div className='grey-wrapper'> 
        <CoinInfo heading = {coinData.name} desc={coinData.desc} />
        </div>
        </>
        }
    </div>
  )
}

export default CoinPage