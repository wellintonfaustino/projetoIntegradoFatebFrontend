import logo from './logo.svg';
import './App.css';

import CadastrarClientes from './module/page/cadastros/cadastrarClientes';
import Navbar from './module/components/navbar';
import CadastrarCidade from './module/page/cadastros/cadastrarCidade';
import CadastroTelefone from './module/page/cadastros/cadastroTelefone';

function App() {
   return (
      <div className='flex flex-col items-center justify-center'>
         <Navbar className='absolute' />

         <CadastroTelefone />
      </div>
   );
}

export default App;
