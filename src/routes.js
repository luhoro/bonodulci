import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from 'pages/Inicio'
import Cardapio from 'pages/Cardapio'
import Menu from 'components/Menu'
import PaginaPadrao from 'components/PaginaPadrao'
import Sobre from 'pages/Sobre/Index'

const AppRouter = () => {
  return (
    <main>
      <Router>
        <Menu />

        <Routes>
          <Route path='/' element={<PaginaPadrao />} >
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio />} />
            <Route path='sobre' element={<Sobre />} />
          </Route>

          <Route path='/*' />
        </Routes>
      </Router>
    </main>
  )
}

export default AppRouter