import React from 'react';
import { FaTreeCity } from 'react-icons/fa6';

const CadastrarCidade = () => {
   return (
      <div className='py-6 px-14 flex flex-col justify-center items-center mt-5 border border-base-200 rounded-box'>
         <div className='text-base-content text-3xl font-mono'>
            Cadastrar Cidade
         </div>
         <div className='mt-5 '>
            <label className='input input-bordered flex items-center gap-2 w-full'>
               <FaTreeCity className='text-accent text-2xl ' />
               <input
                  type='text'
                  className='grow'
                  placeholder='Nome cidade'
               />
            </label>
         </div>
         <div className='mt-4'>
            <button className='btn btn-primary px-24'>Cadastrar</button>
         </div>
      </div>
   );
};

export default CadastrarCidade;
