import classNames from 'classnames'
import style from './Tags.module.scss'
import { IPrato } from 'types/IPrato'

const tags = ({
  category,
  size,
  serving,
  price
}: IPrato) => {
  return (
    <div className={style.tags}>
      <div
        className={classNames({
          [style.tipo]: true,
          [style[`tipo__${category.label.toLowerCase()}`]]: true,
        })}
      >
        {category.label}
      </div>

      <div className={style.porcao}>{size}g</div>

      <div className={style.qtdpessoas}>
        Serve {serving} pessoa{serving === 1 ? '' : 's'}
      </div>

      <div className={style.valor}>R$ {price.toFixed(2)}</div>
    </div>
  )
}

export default tags
