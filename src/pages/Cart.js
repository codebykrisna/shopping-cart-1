import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';
// import cartlogo from '../assets/cartlogo.png';
import { toast } from 'react-hot-toast';
import { removeAll } from '../redux/Slices/CartSlice';
import confetti from 'canvas-confetti';
import { useState,useEffect } from 'react';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  const handleClick = () => {
    confetti({
      particleCount: 1000,
      spread: 300,
      origin: { y: 0.5 }
    });
    dispatch(removeAll());
    setTimeout(() => {
      navigate("/");
    }, 500);
    toast.success("Thanks for Shopping with us");
  };

  return (
    <div className='mt-[80px]'>
      {cart.length > 0 ? (
        <div className='flex lg:flex-row md:flex-row flex-col max-w-6xl h-screen mx-auto top-4 gap-x-3'>
          <div className='flex-1 flex'>
            <div className='flex-1 overflow-y-scroll'>
              {cart.map((item, index) => (
                <CartItem key={item.id} item={item} itemIndex={index} />
              ))}
            </div>
          </div>
          <div className='flex flex-col p-8 lg:w-[40%] md:w-[40%] w-full'>
            <div>
              <div className='uppercase font-bold text-gray-800 text-xl'>Your Cart</div>
              <div className='uppercase font-bold text-green-700 text-3xl mb-4'>Summary</div>
              <p className='font-semibold text-lg text-gray-900'>
                <span>Total Items: {cart.length}</span>
              </p>
            </div>
            <div className='h-[300px] p-5'>
              {/* <img src={cartlogo} alt="cart" className='w-[55%] h-full' /> */}
            </div>
            <div>
              <p className='mb-3'>Total Amount: <span className='font-semibold text-lg text-gray-900'>₹{(totalAmount*80).toFixed(2)}</span></p>
              <button className='w-full bg-green-600 font-bold flex justify-center items-center border border-none rounded-lg py-4 text-white' onClick={handleClick}>
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex justify-center items-center flex-col h-screen'>
          <h1 className="font-semibold text-lg mb-3">Your cart is empty!</h1>
          <Link to="/">
            <button className='bg-green-600 flex justify-center items-end py-2 px-6 text-sm uppercase text-white font-bold rounded-md'>Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
