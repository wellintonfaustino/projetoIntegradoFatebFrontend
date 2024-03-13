import React from 'react';
import ThemeSelector from '../theme/themeSelector';

const Navbar = () => {
   return (
      <div className='navbar bg-primary'>
         <div className='flex-1'>
            <a className='btn btn-ghost text-xl'>Nome Projeto</a>
         </div>
         <div className='flex-none'>
            <div className='py-2 mr-3'>
               <ThemeSelector />
            </div>
            <div className='dropdown dropdown-end'>
               <div
                  tabIndex={0}
                  role='button'
                  className='btn btn-ghost btn-circle avatar'
               >
                  <div className='w-10 rounded-full'>
                     <img
                        alt='Tailwind CSS Navbar component'
                        src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
                     />
                  </div>
               </div>
               <ul
                  tabIndex={0}
                  className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary-100 rounded-box w-52'
               >
                  <li>
                     <a className='justify-between'>
                        Profile
                        <span className='badge'>New</span>
                     </a>
                  </li>
                  <li>
                     <a>Settings</a>
                  </li>
                  <li>
                     <a>Logout</a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
