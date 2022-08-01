import React, {useState,useRef} from 'react'
import { Link } from 'react-router-dom'
import '../style/Header.css'
import {BiSearchAlt2} from "react-icons/bi"
import {BsBasket} from 'react-icons/bs'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";
import { logOut} from '../firebase'
import { SearchOrder } from '../redux/actions/prodActions'
import {FaBars,FaTimes} from 'react-icons/fa'
const Header = () => {
   const navref =useRef()
   const currentUser= useSelector((state)=>state.currentUser)
   
   const name = currentUser?.email
   const Basket= useSelector((state)=>state.basketItems)
   const  [loading,setLoading]=useState(false)
   let navigate = useNavigate();

   async function handleLogOut(){
      setLoading(true)
      try{
        await logOut()
        setTimeout(() => {
         navigate("Register", { replace: true });
       }, 1000);
      }catch{
        alert('Something is wrong')
      }
      setLoading(false)
    }

  const dispatch=useDispatch()
  const getSearchItem=(item)=>{
    
    dispatch(SearchOrder(item))
  }
  const showNavbar = ()=>{
    navref.current.classList.toggle("responsive_navbar")
  }
  return (
    <header className='Header'>
       {/* Logo */}
       <Link to='/'>
         <img src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='' className='amazon-logo'/>
       </Link>
       {/* input */}
       <div className='search-div'>
         <input type='text' placeholder='Search Item ...' className='Header-input' onChange={e=>getSearchItem(e.target.value)}/>
         <BiSearchAlt2 className='Icon-input'/>
       </div>
       {/* nav */}
       <nav  ref={navref} className='headerNav'>
          <div className='headerOption'>
             <span className='FirstSpan'>Language</span>
             <select  className='language'>
                <option value="TR">Turkey</option>
                <option value="DE">Germany</option>
                <option value="US">English</option>
                <option value="JP">Japan</option>
                <option value="FR">France</option>
                <option value="CN">China</option>
             </select>
          </div>
          <Link to='Login' className='HeaderLink'>
                <div className='headerOption'>
                     <span className='FirstSpan'>Hello:<br/>{name} </span>
                     <span className='SecondSpan'>{name ?  (<button disabled={loading || !currentUser} onClick={handleLogOut} className='logout'>Log Out</button>) :'Sign in'}</span>
                </div>
          </Link>
          <Link to='Orders' className='HeaderLink'>
                <div className='headerOption'>
                    <span className='FirstSpan'>Returns</span>
                    <span className='SecondSpan'>&Orders</span>
                </div>
          </Link>
          <Link to='Basket' className='HeaderLink'>
            <div className='Basket'>
               <span>
                  <BsBasket/>
               </span>
               <span className='basket-items'>{Basket.length}</span>
            </div>   
          </Link>
          <button className='nav-btn close-btn' onClick={showNavbar}>
          <FaTimes/>
        </button>
       </nav>
       <button className='nav-btn close-btn' onClick={showNavbar}>
        <FaBars/>
       </button>
       {/* basket */}
    </header>
  )
}

export default Header