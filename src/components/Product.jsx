import React from 'react'
import '../style/Product.css'
import { useSelector, useDispatch } from "react-redux";
import { addBasketItem } from '../redux/actions/prodActions';
import {AiTwotoneStar} from "react-icons/ai"
import { OrderItem } from '../redux/actions/prodActions';


const Product = ({rating}) => {
    const products= useSelector((state)=>state.products)
    const StateOrders= useSelector((state)=>state.searchOrders)
    console.log(StateOrders);
    const dispatch = useDispatch()
    // console.log(products);
    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      };
    const addItemtoCard=(item)=>{
      dispatch(addBasketItem(item))
    }
    const Order=(order)=>{
      dispatch(OrderItem(order))
    }
    const mapProducts = StateOrders.length > 0 ? StateOrders : products
  return (
    <div className='productList'>
       {mapProducts.map((item)=>{
        return(
          <div key={item.id} className='product'>
            <h2>{item.category}</h2>
            <img src={item.image} alt='' className='productImage'/>
            <p>{truncate(item?.description, 50)}</p>
            <div className='prod-rate'>
                <strong style={{color:"black"}}>Rate:</strong>
                {Array(rating).fill().map((_,index)=>{
                    return(
                    <p key={index} className="rate-star"><AiTwotoneStar/></p>
                    )
                }
                )}
            </div>
            <p className='item-price'>
                <small>$</small>
                <strong>{item.price}</strong>
            </p>
            <button className='addBasket addbasket1' onClick={()=>addItemtoCard(item)}>Add to Basket</button><br/>
            <button className='addBasket' onClick={()=>Order(item)} >Order </button>
          </div>
        )
       })}
    </div>
  )
}

export default Product