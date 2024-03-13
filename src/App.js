import logo from './logo.svg';
import './App.css';

import CadastrarClientes from './module/page/cadastros/cadastrarClientes';
import Navbar from './module/components/navbar';
import CadastrarCidade from './module/page/cadastros/cadastrarCidade';

function App() {
   return (
      <div className='flex flex-col items-center justify-center'>
         <Navbar className='absolute' />

         <CadastrarCidade />
      </div>
   );
}

export default App;
