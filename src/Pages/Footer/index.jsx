import cls from './Footer.module.scss'
import { NavLink } from 'react-router-dom'
import { FiInstagram, GrFacebook, FaTwitter, } from 'react-icons/all'
const Footer = () =>{
    return(
        <div className={cls.root}>
            <div className={cls.GG_Cont}>
                <div className={cls.nav_Cont}>
                    <ul>
                        <li><p>Меню</p></li>
                        <li><NavLink key='/' activeClassName={cls.active} exact to='/'><p>Главная</p></NavLink></li>
                        <li><NavLink key='/auto' activeClassName={cls.active} exact to='/Auto'><p>Авто</p></NavLink></li>
                        <li><NavLink key='/onas' activeClassName={cls.active} to='/About'><p>О нас</p></NavLink></li>
                    </ul>
                </div>
                <div className={cls.numer}>
                    <ul>
                        <li><p>Наш номер</p></li>
                        <li><p>+996 779 876 543</p></li>
                    </ul>
                </div>
                <div className={cls.media_Cont}>
                    <ul>
                        <li><p>Наши сотцети</p></li>
                        <div>
                            <p><a href='https://www.instagram.com/?hl=ru'><FiInstagram className={cls.icon}/></a></p>
                            <p><a href='https://www.facebook.com/'><GrFacebook className={cls.icon}/></a></p>
                            <p><a href='https://twitter.com/'><FaTwitter className={cls.icon}/></a></p>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Footer