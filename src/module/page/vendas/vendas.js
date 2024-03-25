import React from 'react';
import { BsPersonFillDown, BsPersonFillUp } from 'react-icons/bs';

const Vendas = () => {
   return (
      <div className='py-6 px-14 flex flex-col justify-center items-center mt-5 border border-opacity-25 border-secondary rounded-box w-3/4 bg-neutral-content shadow-black'>
         <div className=' text-neutral text-3xl font-mono font-semibold'>
            Pedidos
         </div>

         <div className='flex items-center justify-center'>
            <div className='mt-5 mx-6'>
               <label className='input input-bordered flex items-center gap-2 w-full'>
                  <BsPersonFillDown className='text-accent text-4xl ' />
                  <input
                     type='text'
                     className='grow'
                     placeholder='Nome Cliente'
                  />
               </label>
            </div>

            <div className='mt-5 mx-6'>
               <label className='input input-bordered flex items-center gap-2 w-full'>
                  <BsPersonFillUp className='text-accent text-4xl ' />
                  <input
                     type='text'
                     className='grow'
                     placeholder='Nome Vendedor'
                  />
               </label>
            </div>
         </div>
         {/** Cadastros de itens do pedido **/}
         <div className='mt-3'>
            <div className=' text-neutral text-2xl font-mono font-semibold'>
               Itens Pedido
            </div>

            <div className='join'>
               <div className='w-12 h-12'>
                  <img
                     alt='Tailwind CSS Navbar component'
                     src='https://cdn.dooca.store/15/products/rggqix937tilvdb9szsakn0tvq7g1lmi2ewd_640x640+fill_ffffff.jpg?v=1676340675&webp=0'
                  />
               </div>
               <div>
                  <div>
                     <input
                        className='input input-bordered join-item'
                        placeholder='Search'
                     />
                  </div>
               </div>
               <select className='select select-bordered join-item'>
                  <option
                     disabled
                     selected
                  >
                     Quantidade
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
               </select>
               <div>
                  <input
                     className='input input-bordered join-item'
                     placeholder='Search'
                  />
               </div>
               <div className='indicator'>
                  <span className='indicator-item badge badge-secondary'>
                     new
                  </span>
                  <button className='btn join-item'>Search</button>
               </div>
            </div>
         </div>

         <div className='mt-4'>
            <button className='btn btn-primary px-24'>Cadastrar</button>
         </div>
      </div>
   );
};

export default Vendas;
