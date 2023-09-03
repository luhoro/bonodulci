import style from './PaginaPadrao.module.scss'
import { Outlet } from 'react-router-dom'

const PaginaPdrao = () => {
  return (
    <>
      <header className={style.header}>
        <div className={style.header__text}>
          Aqui se encontra o lado mais doce da vida!
        </div>
      </header>
      <>
        <Outlet />
      </>
    </>
  )
}

export default PaginaPdrao
