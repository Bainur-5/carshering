import { ImCross } from 'react-icons/im'
import cls from '../Statement/Statement.module.scss'
const RegState = ({setIsFetch}) =>{
    return(
        <div className={cls.cont_Sing}>
            <div className={cls.card}>
                <div className={cls.x}>
                    <ImCross onClick={() => setIsFetch(null)} className={cls.icon}/>
                </div>
                <div className={cls.title}>
                    <h1>С начала зарегистрируйтесь</h1>
                </div>
            </div>
        </div>
    )
}
export default RegState