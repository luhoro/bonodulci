import { useState } from 'react'
import Buscador from './Buscador'
import style from './Cardapio.module.scss'
import { ReactComponent as Logo } from 'assets/logo.svg'

const Cardapio = () => {

  const [busca, setBusca] = useState('')

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
      </section>
    </>
  )
}

export default Cardapio
