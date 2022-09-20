import Footer from 'components/footer';
import Menu from 'components/menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Cardapio from 'pages/cardapio';
import Inicio from 'pages/inicio';
import NotFound from 'pages/NotFound';
import Sobre from 'pages/sobre';
import Prato from 'pages/prato';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter(){
  return (
    <main className='container'>
      <Router>
        <Menu />
       
        <Routes>
          <Route path='/' element={<PaginaPadrao/>}>
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio />} />
            <Route path='sobre' element={<Sobre />} />
          </Route>
          <Route path='*' element={<NotFound />} />
          <Route path='prato/:id' element={<Prato />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}