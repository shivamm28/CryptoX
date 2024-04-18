import React, { useEffect, useState } from 'react'
import Header from '../Components/Common/Header'
import TabsComponent from '../Components/Dashboard/Tabs'
import axios from "axios";
import Search from '../Components/Dashboard/Search';
import PaginationControlled from '../Components/Dashboard/Pagination';
import Loader from '../Components/Common/Loader';
import { Get100Coins } from '../Functions/Get100Coins';
function Dashboard() {

  const [coins , setCoins] = useState([])
  const [paginatedCoins , setPaginatedCoins] = useState([])
  const [search, setSearch] = useState("")
  const[isLoading , setIsLoading] = useState(true);
  useEffect(() => {
    getCoins();
  } , [])


   const getCoins = async () =>{
    const myCoins = await Get100Coins();
    if(myCoins){
    setCoins(myCoins)
    setPaginatedCoins(myCoins.slice(0,10))
    setIsLoading(false);
    }
  }

  const onSearchChange = (e) => {
    // console.log(e.target.value);
    setSearch(e.target.value);
  }

  var filteredCoins = coins.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))

  const [page, setPage] = useState(1);
  const handlePageChange = (event, value) => {
    setPage(value);
    var prevIndex = (value-1)*10;
    setPaginatedCoins(coins.slice(prevIndex , prevIndex+10));
  };

  return (
    <>
    <Header />
    {isLoading?
    <Loader/>:
    <div>
        
        <Search search={search} onSearchChange={onSearchChange}/>
        <TabsComponent coins = {search?filteredCoins:paginatedCoins} />
        {!search && <PaginationControlled page={page} handleChange={handlePageChange} />}
    </div>}
    </>
  )
}

export default Dashboard