import React from 'react';
import { PiShoppingCartSimpleDuotone } from 'react-icons/pi';

const Navbar = () => {
   return (
      <div class='navbar bg-primary text-primary-content w-screen'>
         <div class='flex-1'>
            <a class='btn btn-ghost text-xl'>NavBar</a>
         </div>
         <div class='flex-none'>
            <div class='dropdown dropdown-end'>
               <div
                  tabindex='0'
                  role='button'
                  class='btn btn-ghost btn-circle'
               >
                  <div class='indicator'>
                     <PiShoppingCartSimpleDuotone className='w-6 h-6 text-primary-content' />
                     <span class='badge badge-sm indicator-item'>8</span>
                  </div>
               </div>
               <div
                  tabindex='0'
                  class='mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow'
               >
                  <div class='card-body bg-info text-info-content  rounded-box'>
                     <span class='font-bold text-lg'>8 Items</span>
                     <span class=''>Subtotal: $999</span>
                     <div class='card-actions'>
                        <button class='btn btn-primary btn-block'>
                           View cart
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            <div class='dropdown dropdown-end'>
               <div
                  tabindex='0'
                  role='button'
                  class='btn btn-ghost btn-circle avatar'
               >
                  <div class='w-10 rounded-full'>
                     <img
                        alt='Tailwind CSS Navbar component'
                        src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
                     />
                  </div>
               </div>
               <ul
                  tabindex='0'
                  class='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-accent text-accent-content rounded-box w-52'
               >
                  <li>
                     <a class='justify-between'>
                        Profile
                        <span class='badge'>New</span>
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
