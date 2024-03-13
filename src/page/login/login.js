import React from 'react';

const Login = () => {
   return (
      <div className='h-screen w-screen '>
         <div class='w-full h-screen flex '>
            <img
               src='.\img\login.jpg'
               alt='background'
               class='object-cover object-center h-screen w-7/12 hover:brightness-50'
            />

            <div class='bg-neutral flex flex-col justify-center items-center w-5/12 shadow-lg'>
               <h1 class='text-3xl font-bold text-neutral-content mb-2'>
                  LOGIN
               </h1>
               <div class='w-1/2 text-center'>
                  <input
                     type='text'
                     name='username'
                     placeholder='Login'
                     autocomplete='off'
                     class='shadow-md border w-full h-10 px-3 py-2  focus:outline-none  mb-3 rounded'
                  />
                  <input
                     name='password'
                     placeholder='Senha'
                     autocomplete='off'
                     class='shadow-md border w-full h-10 px-3 py-2  focus:outline-none -500 mb-3 rounded'
                  />
                  <button class='bg-primary hover:bg-primary-content text-primary-content hover:text-primary px-3 py-1 rounded text-lg focus:outline-none shadow'>
                     Login
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
