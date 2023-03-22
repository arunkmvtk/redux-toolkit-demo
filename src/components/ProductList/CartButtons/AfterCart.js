import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {decrement, increment } from '../../../redux/cart';
import './CartButtons.css';


const AfterCart = () => {
const dispatch= useDispatch();
const {cartCount}= useSelector((state) => state.cart);
  return (
    <div className='after-cart'>
      <button className='cart-counter-button' onClick={() => dispatch(decrement())}>-</button>
      <div className='cart-count'>{cartCount}</div>
      <button className='cart-counter-button' onClick={() => dispatch(increment())}>+</button>
    </div>
  )
}

export default AfterCart;