import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductList from "../components/ProductList/ProductList";

export default function Letter() {
  const { id } = useParams();
  const [food, setFood] = useState([]);
  async function getFood() {
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${id}`,
      );
      console.log(res.data);
      setFood(res.data.meals);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
      getFood();
  },[id])

  return <div>
     <ProductList products={food}/>
  </div>;
}
