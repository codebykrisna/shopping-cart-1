import React from 'react'
import { toast } from 'react-hot-toast';
import {HiArchiveBoxXMark} from "react-icons/hi2"
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () =>{
    dispatch(remove(item.id));
    toast.success("Item removed");
  }
  return (
    <div >


      <div className='flex lg:flex-row flex-col justify-center items-center p-6 border border-l-0 border-r-0 gap-x-4 border-top-0  border-gray-600'>

        <div className='w-[180px] mr-4' >
          <img src={item.image} alt="img" className='h-full w-full'/>
        </div>

        <div className='flex flex-col gap-y-2'>
          <h1 className='font-bold my-3 text-gray-900 text-lg '>{item.title}</h1>
          <h1 className=' text-gray-700 mb-4 text-sm text-left'>{item.description.split(" ").slice(0,20).join(" ")+ "..."}</h1>

          <div className='flex flex-row justify-between'>
            <p className='text-green-600 font-bold '>₹{(item.price*80).toFixed(2)}</p>

            <div className ="p-2 cursor-pointer bg-red-400 border rounded-full hover:scale-110 transition-all border-none" onClick={removeFromCart}>
              <HiArchiveBoxXMark className='text-red-900 text-sm '/>
            </div>

          </div>

        </div>
      </div>




    </div>
  )
}

export default CartItem