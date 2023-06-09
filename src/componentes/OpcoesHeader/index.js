import styled from 'styled-components'
import { Link } from 'react-router-dom'

const textoOpcoes = [
    'CATEGORIAS',
    'FAVORITOS',
    'ESTANTE'
]

const Opcoes = styled.ul `
    gap: 15px;
    display: flex;
`

const Opcao = styled.li `
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-height: 120px;
`

export default function OpcoesHeader() {
    return (
        <Opcoes>
            {textoOpcoes.map((texto) => (
                <Link to={`/${texto.toLowerCase()}`}> <Opcao><p>{texto}</p></Opcao> </Link> 
            ))}
        </Opcoes>
    )
}