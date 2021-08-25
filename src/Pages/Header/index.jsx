import { NavLink } from 'react-router-dom'
import { user } from '../../API/api';
import cls from './Header.module.scss'
const Header = () =>{
    return(
    <div className={cls.root}>
        
        <ul>
            <li><NavLink key='/' activeClassName={cls.active} exact to='/'>Главная</NavLink></li>
            <li><NavLink key='/auto' activeClassName={cls.active} exact to='/Auto'>Авто</NavLink></li>
            <li><NavLink key='/onas ' activeClassName={cls.active} to='/About'>О нас</NavLink></li>
            {
                user ? (                    
                    <li><NavLink key='/auth ' activeClassName={cls.active} to='/User'>Профиль</NavLink></li>
                ) : (                    
                    <li><NavLink key='/auth ' activeClassName={cls.active} to='/Login'>Войти</NavLink></li>
                )
            }
        </ul>

    </div>
    )
}
export default Header;