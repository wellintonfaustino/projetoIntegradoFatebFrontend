import { React } from 'react';

const ThemeSelector = () => {
   return (
      <div>
         <div className='flex justify-center items-center'>
            <div className='dropdown dropdown-end'>
               <div
                  tabIndex={0}
                  role='button'
                  className='btn'
               >
                  Tema
                  <svg
                     width='12px'
                     height='12px'
                     className='h-2 w-2 fill-current opacity-60 inline-block'
                     viewBox='0 0 2048 2048'
                  >
                     <path d='M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z'></path>
                  </svg>
               </div>
               <ul
                  tabIndex={0}
                  className='dropdown-content z-[1] p-2 shadow-2xl bg-base-200 rounded-box w-52 h-40 overflow-auto'
               >
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='Default'
                        value='mytheme'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='Light'
                        value='light'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='Dark'
                        value='dark'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='Cupcake'
                        value='cupcake'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='bumblebee'
                        value='bumblebee'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='emerald'
                        value='emerald'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='corporate'
                        value='corporate'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='synthwave'
                        value='synthwave'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='retro'
                        value='retro'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='cyberpunk'
                        value='cyberpunk'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='valentine'
                        value='valentine'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='halloween'
                        value='halloween'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='garden'
                        value='garden'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='forest'
                        value='forest'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='aqua'
                        value='aqua'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='pastel'
                        value='pastel'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='lofi'
                        value='lofi'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='fantasy'
                        value='fantasy'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='wireframe'
                        value='wireframe'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='black'
                        value='black'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='luxury'
                        value='luxury'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='dracula'
                        value='dracula'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='cmyk'
                        value='cmyk'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='autumn'
                        value='autumn'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='business'
                        value='business'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='acid'
                        value='acid'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='lemonade'
                        value='lemonade'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='night'
                        value='night'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='coffee'
                        value='coffee'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='dim'
                        value='dim'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='winter'
                        value='winter'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='nord'
                        value='nord'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='sunset'
                        value='sunset'
                     />
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default ThemeSelector;
