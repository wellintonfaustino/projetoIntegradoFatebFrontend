import './App.css';
import Navbar from './module/components/navbar';
import CadastroCategoria from './module/page/cadastros/cadastrarCategoria';

function App() {
   return (
      <div className='flex flex-col items-center justify-center'>
         <Navbar className='absolute' />

         <CadastroCategoria />
      </div>
   );
}

export default App;
