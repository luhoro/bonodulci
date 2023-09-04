import style from './Inicio.module.scss'
import styleTema from 'styles/Tema.module.scss'
import cardapio from 'data/itens.json'

const Inicio = () => {
  let pratosRecomendados = [...cardapio]

  pratosRecomendados = pratosRecomendados
    .sort(() => 0.5 - Math.random())
    .splice(0, 3)

  return (
    <section>
      <h3 className={styleTema.titulo}>Recomendações da cozinha</h3>

      <div className={style.recomendados}>
        {pratosRecomendados.map((item) => (
          <div key={item.id} className={style.recomendado}>
            <div className={style.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>

            <button className={style.recomendado__botao}>Ver mais</button>
          </div>
        ))}
      </div>

      <h3 className={styleTema.titulo}>Nossa casa</h3>
      <div className={style.nossaCasa}>
        <img src="https://images.unsplash.com/photo-1491223111273-505dc52e1cf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Lar Bono Dulci"/>

        <div className={style.nossaCasa__endereco}>
          Rua Bom senhor, 3748 <br /> <br /> Vila Maria - BR
        </div>
      </div>
    </section>
  )
}

export default Inicio
