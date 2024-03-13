import logo from './logo.svg';
import './App.css';

import CadastrarClientes from './module/page/cadastros/cadastrarClientes';
import Navbar from './module/components/navbar';

function App() {
   return (
      <div className='flex flex-col items-center justify-center'>
         <Navbar className='absolute' />

         <CadastrarClientes />
      </div>
   );
}

export default App;
