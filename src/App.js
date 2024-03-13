import logo from './logo.svg';
import './App.css';

import CadastrarClientes from './module/page/cadastros/cadastrarClientes';
import Navbar from './module/components/navbar';

function App() {
   return (
      <div className=''>
         <Navbar />

         <CadastrarClientes />
      </div>
   );
}

export default App;
