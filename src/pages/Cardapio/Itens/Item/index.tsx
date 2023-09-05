import style from './item.module.scss'
import { IPrato } from 'types/IPrato'
import Tags from 'components/Tags'


const Item = (props: IPrato) => {
  const { title, description, photo } = props

  return (
    <div className={style.item}>
      <div className={style.item__imagem}>
        <img src={photo} alt={title} />
      </div>

      <div className={style.item__descricao}>
        <div className={style.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <Tags {...props} />
      </div>
    </div>
  )
}

export default Item
