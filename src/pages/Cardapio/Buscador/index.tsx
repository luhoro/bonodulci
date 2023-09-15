import styles from './Buscador.module.scss'
import { CgSearch } from 'react-icons/cg'
import { memo, useMemo } from 'react'

interface Props {
  busca: string,
  setBusca: React.Dispatch<React.SetStateAction<string>>
}

const Buscador = ({ busca, setBusca }: Props) => {
  const elemento = useMemo(() => {
    return <CgSearch size={22} color='#4c4d5e' />
  }, [])

  return (
    <div className={styles.buscador}>
      <input
        id='cardapio'
        type="text"
        value={busca}
        placeholder='Buscar'
        onChange={event => setBusca(event.target.value)}
      />
      <label htmlFor="cardapio">
        {elemento}
      </label>
    </div>
  )
}

export default memo(Buscador)