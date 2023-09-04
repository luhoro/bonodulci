import style from './Footer.module.scss'
import { ReactComponent as Logo } from 'assets/logo.svg'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Logo className={style.logo} />
    </footer>
  )
}

export default Footer
