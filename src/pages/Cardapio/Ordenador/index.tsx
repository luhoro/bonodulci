import React, { useState, memo } from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md'
import style from './Ordenador.module.scss'
import opcoes from 'data/opcoes.json'

export type OpcoesOrdenador = '' | 'porcao' | 'qtd_pessoas' | 'preco'

interface Props {
  ordenador: OpcoesOrdenador
  setOrdenador: React.Dispatch<React.SetStateAction<OpcoesOrdenador>>
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
      <MdKeyboardArrowUp
        size={22}
        color='#4c4d5e'
        style={{
          transform: `rotate(${aberto ? 0 : 180}deg)`
        }}
      />
      {/* {aberto
        ? < MdKeyboardArrowUp size={20}/>
        : < MdKeyboardArrowDown size={20} />
      } */}

      <div className={`
        ${style.ordenador__options}
        ${aberto ? style['ordenador__options--ativo'] : ''}
      `}>
        {opcoes.map((opcao) => (
          <div
            className={style.ordenador__option}
            key={opcao.value}
            onClick={() => setOrdenador(opcao.value as OpcoesOrdenador)}
          >
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  )
}

export default memo(Ordenador)
