import style from './Prato.module.scss'
import { useParams, useNavigate } from 'react-router-dom'
import cardapio from 'data/itens.json'
import Tags from 'components/Tags'

const Prato = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const prato = cardapio.find(item => item.id === Number(id))
  if (!prato) {
    return ''
  }

  return (
    <>
      <button className={style.voltar} onClick={() =>navigate(-1) }>
        {'<- Voltar'}
      </button>

      <section className={style.container}>
        <h1 className={style.titulo}>{prato.title}</h1>

        <div className={style.imagem}>
          <img src={prato.photo} alt={prato.title} />
        </div>

        <div className={style.conteudo}>
          <p className={style.conteudo__descricao}>{prato.description}</p>

          <Tags {...prato} />
        </div>
      </section>
    </>
  )
}

export default Prato
