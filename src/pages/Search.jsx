import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductList from '../components/ProductList/ProductList'

export default function Search() {
  const {text} = useParams()
  const [food, setFood] = useState([])
  async function getFood() {
    try {
      const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
      // console.log(res.data);
      setFood(res.data.meals)
    } catch (error) {
      console.error(error);
      
    }
  }
  useEffect(()=>{
    getFood()

  },[text])

  console.log(food);
  

  if( food === null){
    return (
      <div>
        андай тамак жок
      </div>
    )
  }
  return (
    <div>
      <h1 style={{textAlign:"center"}}> поиск кылынды тамак менен: {text}</h1>
        <ProductList products={food}/>
    </div>
  )
}
