import { React, useEffect } from 'react';
import { themeChange } from 'theme-change';

const ThemeSelector = () => {
   useEffect(() => {
      themeChange(false);
   }, []);

   return (
      <div>
         {' '}
         <div className='mt-3 flex justify-center items-center'>
            <select
               className='bg-primary text-primary-content'
               data-choose-theme
            >
               <option
                  disabled
                  value=''
               >
                  Selecione um tema
               </option>

               <option value='mytheme'>Teste Tema Padrão</option>
               <option value='light'>Light</option>
               <option value='retro'>Retro</option>
               <option value='dracula'>Dracula</option>
               <option value='cyberpunk'>Cyberpunk</option>
               <option value='dark'>dark</option>
               <option value='cupcake'>cupcake</option>
               <option value='bumblebee'>bumblebee</option>
               <option value='emerald'>emerald</option>
               <option value='corporate'>corporate</option>
               <option value='synthwave'>synthwave</option>
               <option value='retro'>retro</option>
               <option value='valentine'>valentine</option>
               <option value='halloween'>halloween</option>
               <option value='garden'>garden</option>
               <option value='forest'>forest</option>
               <option value='aqua'>aqua</option>
               <option value='lofi'>lofi</option>
               <option value='pastel'>pastel</option>
               <option value='fantasy'>fantasy</option>
               <option value='wireframe'>wireframe</option>
               <option value='black'>black</option>
               <option value='luxury'>luxury</option>
               <option value='cmyk'>cmyk</option>
               <option value='autumn'>autumn</option>
               <option value='business'>business</option>
               <option value='acid'>acid</option>
               <option value='lemonade'>lemonade</option>
               <option value='night'>night</option>
               <option value='coffee'>coffee</option>
               <option value='winter'>winter</option>
               <option value='dim'>dim</option>
               <option value='nord'>nord</option>
               <option value='sunset'>sunset</option>
            </select>
         </div>
      </div>
   );
};

export default ThemeSelector;
