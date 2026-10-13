import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductList from '../components/ProductList/ProductList';

export default function Home() {
  const [food, setFood] = useState([])
  async function getFood() {
    try {
      const res = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      console.log(res.data);
      setFood(res.data.meals)
    } catch (error) {
      console.error(error);
      
    }
  }
  useEffect(()=>{
    getFood()
  },[])
  return (
    <div>
        <ProductList products={food}/>
    </div>
  )
}
