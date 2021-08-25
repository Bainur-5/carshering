
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import {  getUserHisoryCards } from "../../API"
import {  user } from "../../API/api"
import Loading from "../Loading/Loading"
import cls from './History.module.scss'
const History = () =>{
    const [card, setCard] = useState(null)
    useEffect(() =>{
        if(user){
            const localId = user.localId
            getUserHisoryCards(localId)
            .then(res=> res.json())
            .then(r => {
                console.log(r.history);
                if(r.history){
                    
                    const data = Object.entries(r.history).map(item => {
                        const id = item[0]
                        return{
                            ...item[1],
                            id
                        }
                    }).filter(item => item.type) 
                    setCard(data)
                }
                
            })
        }
    },[])
    console.log(card);
    return(   
        <div className={cls.cont_car}>
            <div className={cls.cars}>
                
            {
                !card ?(
                    <div className={cls.empy}>
                        <h1>Пусто</h1>
                    </div>
                ) : (
                    card ? (
                        
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
                        </NavLink> 
                    ) 
                    ): <Loading/>
                )
            }
            </div>
        </div>
    )
}
export default History

