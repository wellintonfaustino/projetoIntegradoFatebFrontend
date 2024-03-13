import React from 'react';
import { TbShoppingBagPlus, TbShoppingBagMinus } from 'react-icons/tb';

const ProductCard = () => {
   return (
      <div className='py-2'>
         <div className='w-48 h-60 bg-neutral rounded-lg shadow-xl'>
            <div className='z-[10]  absolute pl-44 '>
               <div className='w-6 h-6 bg-warning text-warning-content rounded-full flex justify-center items-center'>
                  1
               </div>
            </div>
            <div className='p-2 grayscale hover:grayscale-0'>
               <img
                  src='.\img\login.jpg'
                  alt='background'
                  className='object-cover object-center rounded-md '
               />
            </div>
            <div className='text-neutral-content text-lg font-mono font-semibold'>
               <div className='text-center'> Produto ...</div>
               <div className='text-right pr-3'>Price R$ XX.XX</div>
            </div>

            <div className='flex justify-around items-center py-3 mb-2 '>
               <button className='w-10 h-10 bg-accent hover:bg-accent-content flex justify-center items-center rounded-full hover:text-accent text-accent-accent'>
                  <TbShoppingBagMinus className='w-8 h-8' />
               </button>
               <button className='w-10 h-10 bg-accent hover:bg-accent-content flex justify-center items-center rounded-full hover:text-accent text-accent-accent'>
                  <TbShoppingBagPlus className='w-8 h-8' />
               </button>
            </div>
         </div>
      </div>
   );
};

export default ProductCard;
