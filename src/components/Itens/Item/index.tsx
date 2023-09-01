import style from './item.module.scss'
import cardapio from '../itens.json'
import classNames from 'classnames'

type Props = (typeof cardapio)[0]

const Item = (props: Props) => {
  const { title, category, photo, price, serving, size } = props

  return (
    <div className={style.item}>
      <div className={style.item__imagem}>
        <img src={photo} alt={title} />
      </div>

      <div className={style.item__descricao}>
        <div className={style.item__titulo}>
          <h2>{title}</h2>
        </div>

        <div className={style.item__tags}>
          <div
            className={classNames({
              [style.item__tipo]: true,
              [style[`item__tipo__${category.label.toLowerCase()}`]]: true,
            })}
          >
            {category.label}
          </div>

          <div className={style.item__porcao}>{size}g</div>

          <div className={style.item__qtdpessoas}>
            Serve {serving} pessoa{serving === 1 ? '' : 's'}
          </div>

          <div className={style.item__valor}>
            R$ {price.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
