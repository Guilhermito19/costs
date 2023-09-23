import { Link } from 'react-router-dom'
import favicon from '../img/favicon.ico';
import './Menu.css'

export default function Menu() {
  return (
    <nav className='menu'>
      <h1>
        <Link className='list_lo' id='logo' to='/'>Costs <img src={favicon} alt="" /></Link>
      </h1>
      <ul className='lista_links'>
        <li><Link className='list_link' to='/'>Home</Link></li>
        <li><Link className='list_link' to='/contact'>Contato</Link></li>
        <li><Link className='list_link' to='/company'>Empresas</Link></li>
        <li><Link className='list_link_btn' to='/new'>Novo</Link></li>
      </ul>
    </nav>
  )
}

