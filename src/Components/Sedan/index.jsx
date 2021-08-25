import { useEffect, useState } from "react"
import { BiChevronsRight } from "react-icons/bi"
import { NavLink } from "react-router-dom"
import { getCards } from "../../API"
import Loading from "../Loading/Loading"
import cls from './Sedan.module.scss'

const Sedan = () => {

   
   const [cards, setCards] = useState(null)
   const [isFetching, setIsFetching] = useState(false)

   const allCard = () =>{
      
      getCards()
      .then(res => res.json())
      .then(r => {
         const data = Object.entries(r).map(item => {
            const cardId = item[0]
            return{
               ...item[1],
               cardId
            }
         })
         data.length = 12
         setCards(data)
      })
   }
   useEffect(() => {
      allCard();
      setIsFetching(false);
    }, [isFetching]);
    return(
        <div className={cls.root}>
            <div className={cls.topCars}>
            {
               cards ? (
                  cards.map(item =>                        
                     <NavLink key={item.cardId} className={cls.car} to={`/AutoCard/${item.cardId}`}>
                        <div><img src={item.image} alt={item.cardId}/></div>
                        <div className={cls.text}>
                           <h2>{item.mark}</h2>
                           <p>{item.model_type}</p>
                        </div>
                     </NavLink>
                  
                  )
               ) : <Loading/>
            }
            </div>
            <div className={cls.more_cont}>
                  <div><NavLink key={99} to='/Auto'>ЕЩЕ <BiChevronsRight className={cls.icon}/></NavLink></div>
            </div>
        </div>
    )
}
export default Sedan;
