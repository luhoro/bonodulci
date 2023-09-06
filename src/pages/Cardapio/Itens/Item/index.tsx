import style from './item.module.scss'
import { IPrato } from 'types/IPrato'
import Tags from 'components/Tags'
import { useNavigate } from 'react-router-dom'


const Item = (props: IPrato) => {
  const { id, title, description, photo } = props
  const navigate = useNavigate()

  return (
    <div className={style.item} onClick={() => navigate(`/prato/${id}`)}>
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
