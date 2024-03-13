import React from 'react';
import { BsPersonBoundingBox } from 'react-icons/bs';
import { PiKeyDuotone } from 'react-icons/pi';
import { FaTreeCity } from 'react-icons/fa6';

const CadastrarClientes = () => {
   return (
      <div className='w-96 flex flex-col  justify-center items-center'>
         <div className=' '>
            <label className='input input-bordered flex items-center gap-2 mb-5 w-full'>
               <BsPersonBoundingBox className='text-accent' />
               <input
                  type='text'
                  className='grow'
                  placeholder='Username'
               />
            </label>

            <label className='input input-bordered flex items-center gap-2 mb-5 w-full'>
               <PiKeyDuotone className='text-accent' />
               <input
                  type='number'
                  className='grow'
                  placeholder='CPF'
               />
            </label>

            <label className='input input-bordered flex items-center gap-2 w-full'>
               <FaTreeCity className='text-accent' />
               <input
                  type='text'
                  className='grow'
                  placeholder='Cidade'
               />
            </label>
         </div>
      </div>
   );
};

export default CadastrarClientes;
