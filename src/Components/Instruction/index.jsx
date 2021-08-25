import cls from './Instruction.module.scss'
import { FaIdCard, FaUserCheck, FaRoute, IoCarSportSharp} from 'react-icons/all'
const Instrucrion = () =>{
    return(
        <div className={cls.root}>
            <h1>Схема работы</h1>
            <div className={cls.cont_Card}>
                <div className={cls.card} >
                    <div className={cls.card_img}>
                        <div><FaIdCard className={cls.icon}/></div>
                    </div>
                    <div className={cls.card_content}>
                        <h3>РЕГИСТРАЦИЯ</h3>
                        <div className={cls.text}>
                            <p>
                                Вы устанавливаете мобильное приложение и проходите в нем регистрацию                        
                            </p>
                        </div>
                    </div>
                </div>
                <div className={cls.card}>
                    <div className={cls.card_img}>
                        <div><FaUserCheck className={cls.icon}/></div>
                    </div>
                    <div className={cls.card_content}>
                        <h3>ПОДТВЕРЖДЕНИЕ</h3>
                        <div className={cls.text}>
                            <p>
                            Служба безопасности проверит ваши документы и активирует ваш аккаунт                        </p>
                        </div>
                    </div>
                </div>
                <div className={cls.card}>
                    <div className={cls.card_img}>
                        <div><FaRoute className={cls.icon}/></div>
                    </div>
                    <div className={cls.card_content}>
                        <h3>ДОСТАВКА / БРОНЬ</h3>
                        <div className={cls.text}>
                            <p>
                            Вы выбираете авто, вносите страховой депозит с банковской карты и заказываете доставку.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={cls.card}>
                    <div className={cls.card_img}>
                        <div><IoCarSportSharp className={cls.icon}/></div>
                    </div>
                    <div className={cls.card_content}>
                        <h3>АРЕНДА</h3>
                        <div className={cls.text}>
                            <p>
                            На время аренды у вас включен таймер в мобильном приложении и вы можете контролировать расходы                        </p>
                        </div>
                    </div>
                </div>
                <div className={cls.card}>
                <div className={cls.card_img}>
                    <div><IoCarSportSharp className={cls.icon}/></div>
                </div>
                <div className={cls.card_content}>
                    <h3>ЗАВЕРШЕНИЕ</h3>
                    <div className={cls.text}>
                        <p>
                        Зона завершения аренды подсвечена в приложении зеленым цветом.                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Instrucrion