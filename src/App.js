import './App.css';
import Navbar from './module/components/navbar';
import Vendas from './module/page/vendas/vendas';

function App() {
   return (
      <div className='flex flex-col items-center justify-center'>
         <Navbar className='absolute' />

         <Vendas />
      </div>
   );
}

export default App;
