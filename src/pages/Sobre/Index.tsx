import style from './Sobre.module.scss'
import styleTema from 'styles/Tema.module.scss'

const Sobre = () => {
  return (
    <section className={style.a}>
      <h3 className={styleTema.titulo}>Sobre</h3>

      <div className={style.sobreNos}>
        <img
          src="https://images.unsplash.com/photo-1570038283490-0c2b8fe95b2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt="Lar Bono Dulci"
        />
        <div className={style.sobreNos__texto}>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore dolorem laborum impedit maxime. Reprehenderit ex pariatur harum nulla?</p>
          <p>Quia nemo corrupti eos sint cumque, a non magnam delectus, dolorem aut quas placeat esse in voluptates!</p>
          <p>Officiis, quasi perferendis soluta quisquam sed aliquid!</p>
        </div>
      </div>

      <div className={style.imagens}>
        <div className={style.imagens__imagem}>
          <img src="https://images.unsplash.com/photo-1621857426350-ddab819cf0cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvamElMjBib2xvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="Lar Bono Dulci" />
        </div>

        <div className={style.imagens__imagem}>
          <img src="https://images.unsplash.com/photo-1619685350081-854862f9cbb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxvamElMjBib2xvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="Lar Bono Dulci" />
        </div>
      </div>
    </section>
  )
}

export default Sobre
