import { useEffect, useState } from "react"
import { getCards } from "../../API"
import Loading from "../Loading/Loading"
import cls from './Mark.module.scss'
import { NavLink } from 'react-router-dom'

const Mark = ({mark}) =>{
    const [card, setCard] = useState(null)
    useEffect(() =>{
    getCards()
    .then(res => res.json())
    .then(r => {
        const data = Object.entries(r).map(item => {
            const id = item[0]
            return{
                ...item[1],
                id
            }
        })
        setCard(data)
        })
   },[mark])
    
   return(
        
        <div className={cls.cont_car}>
            <div className={cls.cars}>
                {
                    card ? (
                        mark !== 'Все Авто' ? (
                            card.filter(item => item.type.toUpperCase() === mark).map(item => 
                                <NavLink key={item.id} className={cls.NavLink} to={`/AutoCard/${item.id}`} >
                                    <div className={cls.back}>
                                        <div className={cls.card_Car}>
                                            <div className={cls.info_Car}>
                                                <div className={cls.info_Card}>
                                                    <div>
                                                        <img src='https://pngimg.com/uploads/fuel/fuel_PNG38.png' alt={item.id}/>
                                                    </div>
                                                    <p>Бензин {item.fuel}</p>
                                                </div>
                                                <div className={cls.info_Card}>
                                                    <div>
                                                        <h1>{item.born_year}</h1>
                                                    </div>
                                                        <p>Возраст</p>
                                                </div>
                                                <div className={cls.info_Card}>
                                                    <div>
                                                        <h1>{item.stage}</h1>
                                                    </div>
                                                    <p>Стаж</p>
                                                    </div>
                                                </div>
                                            <div className={cls.car_img1}>
                                                <img src={item.image} alt={item.id}/>
                                            </div>
                                            <div className={cls.sum}>
                                                <div className={cls.name}>
                                                    <h1>{item.model_type    }</h1>
                                                    <p>{item.type}  {item.mark}</p>
                                                </div>
                                                <div className={cls.sum_text}>
                                                    <p>Стоимость</p>
                                                    <h3>{item.min_price} сом/мин</h3>
                                                    <p>{item.day_price} сом/сутки</p>
                                                </div>
                                            </div>
                                        </div>           
                                    </div>    
                            </NavLink> )
                        ) : (
                            card.map(item => 
                        <NavLink key={item.id} className={cls.NavLink} to={`/AutoCard/${item.id}`} >
                            <div className={cls.back}>
                                <div className={cls.card_Car}>
                                    <div className={cls.info_Car}>
                                        <div className={cls.info_Card}>
                                            <div>
                                                <img src='https://pngimg.com/uploads/fuel/fuel_PNG38.png' alt={item.id}/>
                                            </div>
                                            <p>Бензин {item.fuel}</p>
                                        </div>
                                        <div className={cls.info_Card}>
                                            <div>
                                                <h1>{item.born_year}</h1>
                                            </div>
                                                <p>Возраст</p>
                                        </div>
                                        <div className={cls.info_Card}>
                                            <div>
                                                <h1>{item.stage}</h1>
                                            </div>
                                            <p>Стаж</p>
                                            </div>
                                        </div>
                                    <div className={cls.car_img1}>
                                        <img src={item.image} alt={item.id}/>
                                    </div>
                                    <div className={cls.sum}>
                                        <div className={cls.name}>
                                            <h1>{item.model_type    }</h1>
                                            <p>{item.type}  {item.mark}</p>
                                        </div>
                                        <div className={cls.sum_text}>
                                            <p>Стоимость</p>
                                            <h3>{item.min_price} сом/мин</h3>
                                            <p>{item.day_price} сом/сутки</p>
                                        </div>
                                    </div>
                                </div>           
                            </div>    
                        </NavLink>)
                        )
                    ) : <Loading/>
                }
            </div>
        </div>
    )
}
export default Mark