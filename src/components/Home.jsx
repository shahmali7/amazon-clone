import React,{useEffect} from 'react'
import '../style/Home.css'

import Product from './Product';
import axios from "axios";

import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/prodActions";
import SimpleSlider from './Banner';

const Home = () => {
   const dispatch = useDispatch()
   const axiosData= async ()=>{
    const response = await axios
    .get("https://fakestoreapi.com/products")
    .catch((err) => {
      console.log(err);
    });
  dispatch(setProducts(response.data));
  }
  useEffect(()=>{
    axiosData()
  })
  
    return (
        <div className='Home'>
            {/* Banner */}
            <SimpleSlider/>
            {/* map-products */}
            <Product rating={5}/>
        </div>
    )
}

export default Home