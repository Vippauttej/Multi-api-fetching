import { useEffect, useState } from "react"
import './Cryptocurrency.css'
import React from 'react'
import axios from "axios"
import Coin from './Coin';

export const Crypto = () => {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  const [priceFilter] = useState(0)

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  
  useEffect(()=>{
    axios.get(url).then(res =>{
      console.log(res.data)
      setCoins(res.data)
    })
  },[])

  const getInputValue = (e) =>{
    setSearch(e.target.value)
  }

  // const getInputValue2 = (e) =>{
  //   setPriceFilter(e.target.value)
  // }

  const filterCoins = coins.filter(coin =>{
    return coin.name.toLowerCase().includes(search.toLowerCase())
  })
  
  const priceFilterCoins = filterCoins.filter(coin =>{
    return coin.current_price > priceFilter
  })

  return (
    <div className="px-3">
      <center> <h1  className="display-3 my-3">Crypto currency</h1></center>
      <center>
        <input type="text" className="form-control w-25" onChange={getInputValue} placeholder="search"/> 
      </center>
      <div id="cards_landscape_wrap-2" >
          <div className="row my-3 px-5">
                {
                  priceFilterCoins.map((coin) =>{
                    return(
                      <Coin image={coin.image} name={coin.name} current_price={coin.current_price
                      }/>)
                    })
                } 
          </div> 
      </div>
    </div>
  );
  
}


export default Crypto