import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import style from './Ordenador.module.scss'
import opcoes from './opcoes.json'

interface Props {
  ordenador: string
  setOrdenador: React.Dispatch<React.SetStateAction<string>>
}

const Ordenador = ({ordenador, setOrdenador}: Props) => {
  const [aberto, setAberto] = useState(false)
  const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome

  return (
    <button
      className={`
        ${style.ordenador}
        ${ordenador !== ''
          ? style['ordenador--ativo']
          : ''
        }
      `}
      onClick={() => setAberto(!aberto)}
      onBlur={() => setAberto(false)}
    >
      <span>{nomeOrdenador || 'Ordenar por'}</span>
      {aberto
        ? < MdKeyboardArrowUp size={20}/>
        : < MdKeyboardArrowDown size={20} />
      }

      <div className={`
        ${style.ordenador__options}
        ${aberto ? style['ordenador__options--ativo'] : ''}
      `}>
        {opcoes.map((opcao) => (
          <div
            className={style.ordenador__option}
            key={opcao.value}
            onClick={() => setOrdenador(opcao.value)}
          >
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  )
}

export default Ordenador
