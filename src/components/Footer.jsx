import React, { useEffect, useState } from 'react'
import '../style/footer.css'
const Footer = () => {
  const [backTop,setbackTop]= useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>100){
        setbackTop(true)
      }else{
        setbackTop(false)
      }
    },[])
  })
  const scrollUp=()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
  return (
    <div className='footer'>
        {backTop && (<button onClick={ scrollUp} className='backtoTop'>Back To Top</button>)}
        
        <div className='footerAll'>
            <div>
               <h4>
               <strong>
               Get to Know Us
               </strong>
               </h4>
               <p>Careers</p>
               <p>Blog</p>
               <p>About Amazon</p>
               <p>Amazon Science</p>
            </div>
            <div>
              <h4>
               <strong>
               Make Money with Us
               </strong>
               </h4>
                <p>Sell products on Amazon</p>
                <p>Sell on Amazon Business</p>
                <p>Sell apps on Amazon</p>
                <p>Become an Affiliate</p>
            </div>
            <div>
               <h4>
               <strong>
               Amazon Payment Products
               </strong>
               </h4>
                <p>Amazon Business Card</p>
                <p>Shop with Points</p>
                <p>Reload Your Balance</p>
                <p>Amazon Currency Converter</p>
            </div>
        </div>
    </div>
  )
}

export default Footer