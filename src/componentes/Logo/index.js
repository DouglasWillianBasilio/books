import './estilo.css'
import logo from '../../imagens/logo.svg'

export default function Logo() {
  return (
    <div className='logo'>
      <img
        src={logo}
        alt='logo'
        className='logo-img'>
      </img>
      <p className='logo-p'><strong>Books</strong></p>
    </div>
  )
}