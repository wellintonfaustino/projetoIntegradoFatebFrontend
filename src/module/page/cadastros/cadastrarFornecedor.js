import React from 'react';
import { BsPersonBoundingBox } from 'react-icons/bs';
import { TbNumber } from 'react-icons/tb';

const CadastrarFornecedor = () => {
   return (
      <div className='py-6 px-14 flex flex-col justify-center items-center mt-5 border border-base-200 rounded-box'>
         <div className='text-base-content text-3xl font-mono'>
            Cadastrar Fornecedor
         </div>
         <div className='mt-5 '>
            <label className='input input-bordered flex items-center gap-2 mb-3 w-full'>
               <BsPersonBoundingBox className='text-accent text-2xl ' />
               <input
                  type='text'
                  className='grow w-80'
                  placeholder='Nome Fornecedor'
               />
            </label>

            <label className='input input-bordered flex items-center gap-2 mb-3 w-full'>
               <TbNumber className='text-accent text-2xl ' />
               <input
                  type='number'
                  className='grow'
                  placeholder='CNPJ'
               />
            </label>
         </div>
         <div className='mt-4'>
            <button className='btn btn-primary px-24'>Cadastrar</button>
         </div>
      </div>
   );
};

export default CadastrarFornecedor;
