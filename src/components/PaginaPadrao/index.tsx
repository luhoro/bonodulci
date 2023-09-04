import style from './PaginaPadrao.module.scss'
import styleTema from 'styles/Tema.module.scss'
import { Outlet } from 'react-router-dom'

const PaginaPdrao = () => {
  return (
    <>
      <header className={style.header}>
        <div className={style.header__text}>
          Aqui se encontra o lado mais doce da vida!
        </div>
      </header>
      <div className={styleTema.container}>
        <Outlet />
      </div>
    </>
  )
}

export default PaginaPdrao
