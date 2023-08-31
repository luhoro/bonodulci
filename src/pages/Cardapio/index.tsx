import { useState } from 'react'
import Buscador from 'components/Buscador'
import style from './Cardapio.module.scss'
import { ReactComponent as Logo } from 'assets/logo.svg'
import Filtros from 'components/Filtros'
import Ordenador from 'components/Ordenador'
import Itens from 'components/Itens'

const Cardapio = () => {
  const [busca, setBusca] = useState('')
  const [filtro, setFiltro] = useState<number | null>(null)
  const [ordenador, setOrdenador] = useState('')

  return (
    <>
      <nav className={style.menu}>
        <Logo />
      </nav>

      <header className={style.header}>
        <div className={style.header__text}>
          Aqui se encontra o lado mais doce da vida!
        </div>
      </header>

      <section className={style.cardapio}>
        <h3 className={style.cardapio__titulo}>Cardápio</h3>
        <Buscador busca={busca} setBusca={setBusca} />

        <div className={style.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro} />
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
        </div>

        <Itens />
      </section>
    </>
  )
}

export default Cardapio
