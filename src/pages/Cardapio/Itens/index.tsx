import { useState, useEffect } from 'react'
import style from './Itens.module.scss'
import cardapio from 'data/itens.json'
import Item from './Item'
import { ICardapio } from 'types/IPrato'

interface Props {
  busca: string
  filtro: number | null
  ordenador: string
}

const Itens = (props: Props) => {
  const [lista, setLista] = useState(cardapio)
  const { busca, filtro, ordenador } = props

  const testaBusca = (title: string) => {
    const regex = new RegExp(busca, 'i')
    return regex.test(title)
  }

  const testaFiltro = (id: number ) => {
    if (filtro !== null) return filtro === id
    return true
  }

  const ordenarPropCrescente = (lista: ICardapio, propriedade: 'size' | 'serving' | 'price') => {
    return lista.sort((a, b) => ( a[propriedade] > b[propriedade] ? 1 : -1))
  }

  const ordenar = (novaLista: ICardapio) => {
    switch (ordenador) {
    case 'porcao':
      return ordenarPropCrescente(novaLista, 'size')
    case 'qtd_pessoas':
      return ordenarPropCrescente(novaLista, 'serving')
    case 'preco':
      return ordenarPropCrescente(novaLista, 'price')
    default:
      return novaLista
    }
  }

  useEffect(() => {
    const novaLista = cardapio.filter(item => testaBusca(item.title) && testaFiltro(item.category.id))
    setLista(ordenar(novaLista))
  }, [ busca, filtro, ordenador])

  return (
    <div className={style.itens}>
      {lista.map(item => (
        <Item
          key={item.id}
          {...item}
        />
      ))}
    </div>
  )
}

export default Itens