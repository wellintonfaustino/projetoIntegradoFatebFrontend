import logo from './logo.svg';
import './App.css';
import ProductCard from './module/components/productCard';
import ThemeSelector from './module/theme/themeSelector';
import Navbar from './module/components/navbar';
import Login from './page/login/login';
import CadastrarClientes from './page/cadastros/cadastrarClientes';

function App() {
   return (
      <div className=''>
         <ThemeSelector />
         <CadastrarClientes />
      </div>
   );
}

export default App;
