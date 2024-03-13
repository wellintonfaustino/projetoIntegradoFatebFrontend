import './App.css';
import Navbar from './module/components/navbar';
import CadastrarFornecedor from './module/page/cadastros/cadastrarFornecedor';

function App() {
   return (
      <div className='flex flex-col items-center justify-center'>
         <Navbar className='absolute' />

         <CadastrarFornecedor />
      </div>
   );
}

export default App;
