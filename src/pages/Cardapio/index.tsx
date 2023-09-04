import { useState } from 'react'
import Buscador from 'pages/Cardapio/Buscador'
import style from './Cardapio.module.scss'
import styleTema from 'styles/Tema.module.scss'
import Filtros from './Filtros'
import Ordenador, { OpcoesOrdenador } from 'pages/Cardapio/Ordenador'
import Itens from './Itens'

const Cardapio = () => {
  const [busca, setBusca] = useState('')
  const [filtro, setFiltro] = useState<number | null>(null)
  const [ordenador, setOrdenador] = useState<OpcoesOrdenador>('')

  return (
    <section className={style.cardapio}>
      <h3 className={styleTema.titulo}>Cardápio</h3>
      <Buscador busca={busca} setBusca={setBusca} />

      <div className={style.cardapio__filtros}>
        <Filtros filtro={filtro} setFiltro={setFiltro} />
        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
      </div>

      <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
    </section>
  )
}

export default Cardapio
