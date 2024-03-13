import React from 'react';
import { BsTelephonePlus } from 'react-icons/bs';
import { BsPersonBoundingBox } from 'react-icons/bs';

const CadastroTelefone = () => {
   return (
      <div className='py-6 px-14 flex flex-col justify-center items-center mt-5 border border-base-200 rounded-box'>
         <div className='text-base-content text-3xl font-mono'>
            Cadastrar Telefone
         </div>
         <div className='mt-5 '>
            <label className='input input-bordered flex items-center gap-2 w-full mb-3'>
               <BsTelephonePlus className='text-accent text-2xl ' />
               <input
                  type='number'
                  className='grow'
                  placeholder='Telefone'
               />
            </label>

            <div className='border border-base-300 rounded-btn mb-3'>
               <select className='select w-full  text-center font-mono font-extralight'>
                  <option
                     disabled
                     selected
                  >
                     Tipo de pessoa
                  </option>
                  <option>Cliente</option>
                  <option>Fornecedor</option>
               </select>
            </div>

            <label className='input input-bordered flex items-center gap-2 mb-3 w-full'>
               <BsPersonBoundingBox className='text-accent text-2xl ' />
               <input
                  type='text'
                  className='grow w-80'
                  placeholder='Nome'
               />
            </label>
         </div>
         <div className='mt-4'>
            <button className='btn btn-primary px-24'>Cadastrar</button>
         </div>
      </div>
   );
};

export default CadastroTelefone;
