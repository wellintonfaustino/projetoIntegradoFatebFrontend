import React, { useState } from 'react';
import { BsPersonBoundingBox } from 'react-icons/bs';
import { LuSwitchCamera } from 'react-icons/lu';
import { PiArchiveBoxDuotone } from 'react-icons/pi';
import PrecoInput from './fields/precoInput';

const CadastroProduto = () => {
   const [preco, setPreco] = useState('');

   const handlePrecoChange = (novoPreco) => {
      setPreco(novoPreco);
   };
   return (
      <div className='py-6 px-14 flex flex-col justify-center items-center mt-5 border border-base-200 rounded-box'>
         <div className='text-base-content text-3xl font-mono'>
            Cadastrar Produto
         </div>

         <div className='w-32 h-32 border border-secondary rounded-full flex flex-col justify-center items-center cursor-pointer mt-2'>
            <div className='pt2'>
               <LuSwitchCamera className='text-6xl text-secondary' />
            </div>
            <div className='text-secondary font-extralight font-semibold'>
               Foto
            </div>
         </div>

         <div className='mt-5 '>
            <label className='input input-bordered flex items-center gap-2 w-full mb-3'>
               <PiArchiveBoxDuotone className='text-accent text-2xl ' />
               <input
                  type='text'
                  className='grow'
                  placeholder='Nome do Produto'
               />
            </label>

            <div className='flex justify-around items-center'>
               <PrecoInput
                  value={preco}
                  onValueChange={handlePrecoChange}
               />
               <div className='border border-base-300 rounded-btn mb-3'>
                  <select className='select text-center font-mono font-extralight'>
                     <option
                        disabled
                        selected
                     >
                        Categoria
                     </option>
                     <option>Cliente</option>
                     <option>Fornecedor</option>
                  </select>
               </div>
            </div>

            <label className='input input-bordered flex items-center gap-2 mb-3 w-full'>
               <BsPersonBoundingBox className='text-accent text-2xl ' />
               <input
                  type='text'
                  className='grow w-80'
                  placeholder='Nome Fornecedor'
               />
            </label>
         </div>
         <div className='mt-4'>
            <button className='btn btn-primary px-24'>Cadastrar</button>
         </div>
      </div>
   );
};

export default CadastroProduto;
