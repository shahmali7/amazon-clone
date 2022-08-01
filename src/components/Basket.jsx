import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {AiTwotoneStar} from "react-icons/ai"
import { removeBasketItem } from '../redux/actions/prodActions';
import { OrderItem } from '../redux/actions/prodActions';
const emptyOrder=()=>{
  return(
    <div className='emptyCard'>
      <div className='content-empty'>
        <h3>Your Amazon Card is Empty.</h3>
        <p>
          Your Shopping Cart lives to serve. Give it purpose — fill it with groceries, clothing, household supplies, electronics, and more.
          Continue shopping on the Amazon.com homepage, learn about today's deals, or visit your Wish List.
        </p>
      </div>
      <img alt='' src='https://icon-library.com/images/cancellation-icon/cancellation-icon-14.jpg' className='emptyImage'/>
    </div>
  )
}

const Basket = ({rating}) => {
  const dispatch = useDispatch()
  const Basket= useSelector((state)=>state.basketItems)
  console.log(Basket);
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  


  const handleRemove = (id) => {
    
    dispatch(removeBasketItem(id));
  };

  const Order=(order)=>{
    dispatch(OrderItem(order))
  }

  return (
    <div  className='productList'>
       {Basket.length === 0 && emptyOrder()}
       
       {Basket.map((item,index)=>{
        return(
          <div  key={index} className='product'>
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
            <button className='addBasket' onClick={()=>handleRemove(item.id)}>Remove </button><br/>
            <button className='addBasket' onClick={()=>Order(item)} >Order </button>
          </div>
        )
       })}
    </div>
  )
}

export default Basket