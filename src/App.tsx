import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Sobre } from './pages/Sobre';
import { Servicos } from './pages/Servicos';
import { PetShop } from './pages/PetShop';
import { Contato } from './pages/Contato';
import { Emergencia } from './pages/Emergencia';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="servicos" element={<Servicos />} />
          <Route path="petshop" element={<PetShop />} />
          <Route path="contato" element={<Contato />} />
          <Route path="emergencia-24h" element={<Emergencia />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
