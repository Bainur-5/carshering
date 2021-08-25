import { useState } from 'react';
import { ImCross } from 'react-icons/im';
import cls from './Statement.module.scss'
const Statement = ({card, setIsFetch, onAppl,}) =>{
    const [phone, setPhone] = useState('')
    const [minBtn, setMinBtn] = useState('')
    const [dayBtn, setDayBtn] = useState('')
    const [tarifBtn, setTarifBtn] = useState('')
    
    const min = (e) =>{
        e.preventDefault()
        setMinBtn(true)
        setDayBtn(false)
        setTarifBtn('Минутный')
    }
    const day = (e) =>{
        setMinBtn(false)
        setDayBtn(true)
        setTarifBtn('Суточный')
        e.preventDefault()
    }
    return(
        <div className={cls.cont_Sing}>
            <div className={cls.card}>
                <div className={cls.x}>
                    <ImCross onClick={() => setIsFetch(false)} className={cls.icon}/>
                </div>
                <div className={cls.title}>
                    <p>Чтобы забранировать отправте заявку</p>
                </div>
                <div className={cls.cont_link}>
                    <input onChange={e => setPhone(e.target.value)} type="number" placeholder='Номер телефона'/>
                    <div className={cls.cont_btn}>
                        <div onClick={e => min(e)} className={`${cls.btn} ${minBtn ? cls.btnTrue : null}`} >
                            <p>{card.min_price} сом/мин</p>
                        </div>
                        <div onClick={e => day(e)} className={`${cls.btn} ${dayBtn ? cls.btnTrue : null}`}>
                            <p> {card.day_price} сом/сут</p>
                        </div>
                    </div>
                    <div className={cls.send}>
                        <p onClick={e => {
                            e.preventDefault()
                            onAppl(phone, tarifBtn, setPhone, setTarifBtn)
                        }}  className={cls.btn}>Отправить</p>
                    </div>
                </div>
            </div>  
        </div>
               
    )
}
export default Statement;