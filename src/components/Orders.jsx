import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import '../style/Orders.css'
import {IoMdRemoveCircleOutline} from 'react-icons/io'
import { removeOrderItem } from '../redux/actions/prodActions';
import { loadStripe } from "@stripe/stripe-js";
import {Elements} from '@stripe/react-stripe-js'

import {CardElement} from "@stripe/react-stripe-js"
const promise = loadStripe("pk_test_51LRlDHHazFu8iHZCzBdMgM6J5TGDyQ8Av4kO4GIOxryNVDa4ix548e8Yt2HZIObFUtJeRmFNk5Xfv4GUismVXhKL00Hbk06s4j")

const emptyOrder=()=>{
  return(
    <div className='emptyOrder'>
      <div className='content-order'>
        <h3>Your Order List is Empty </h3>
        <p>
          Your Shopping Cart lives to serve. Give it purpose — fill it with groceries, clothing, household supplies, electronics, and more.
          Continue shopping on the Amazon.com homepage, learn about today's deals, or visit your Wish List.
        </p>
      </div>
      <img alt='' src='https://cdn3.iconfinder.com/data/icons/e-commerce-website-1/64/Out-of-stock-512.png' className='emptyImage'/>
    </div>
  )
}

const Orders = () => {
  const Orders = useSelector((state)=>state.orderItems)
  console.log(Orders);
  const total =Orders.map((item)=>{
    return item.price
  })
  const totalMoney = total.reduce((x,y)=>(x+y),0)
  console.log(totalMoney);

  const dispatch = useDispatch()
  const removeOrder=(id)=>{
    dispatch(removeOrderItem(id))
  }
  return (
    <>
    {Orders.length === 0 && emptyOrder()}
    {Orders.length !==0 && 
    <div className='OrderList'>
     <h1>Your Order List</h1>
    
       
         {Orders.map((item)=>{
           return(
             <div key={item.id} className='orderDiv'>
               <img src={item.image} alt='' className='orderImage'/>
               <div>
                 <h3>Category</h3>
                 <p className='orderp'>{item.category}</p>
               </div>
               <div>
                 <h3>Price</h3>
                 <p className='orderp'>$ {item.price}</p>
               </div>
               <div>
                 <h3>Rating</h3>
                 <p className='orderp'>$ {item.rating.rate}</p>
               </div>
               <button className='iconRemove' onClick={()=>removeOrder(item.id)}><IoMdRemoveCircleOutline/></button>
             </div>
           )
         })}
       
       <div className='payment'>
        <div>
         <h2>Payment Method</h2>
        </div>
        <div className='buy'>
           <Elements stripe={promise}>
             <form className='Form_payment'>
                <CardElement className='cardElement'/>
                <h3>Total Money : <strong>${totalMoney}</strong></h3>
             </form>
           </Elements>
        </div>
       </div>
    </div>}
    </>
  )
}

export default Orders