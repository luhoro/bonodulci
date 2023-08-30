import styles from './Buscador.module.scss'
import { CgSearch } from 'react-icons/cg'

interface Props {
  busca: string,
  setBusca: React.Dispatch<React.SetStateAction<string>>
}

const Buscador = ({ busca, setBusca}: Props) => {
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
        <CgSearch size={22} color='#4c4d5e' />
      </label>
    </div>
  )
}

export default Buscador