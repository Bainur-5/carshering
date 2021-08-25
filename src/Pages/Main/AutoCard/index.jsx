
import cls from './AutoCard.module.scss'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import SwiperImg from '../../../Components/Swiper/Swiper';
import Loading from '../../../Components/Loading/Loading';
import Instrucrion from '../../../Components/Instruction';
import Statement from '../../../Components/Statement';
import { user } from '../../../API/api';
import { getCardId, getUserId, putUserHisoryCard } from '../../../API';
import RegState from '../../../Components/RegState';
const AutoCard = () => {

    
    const [card, setCard] = useState(null)
    const [isFetching, setIsFetching] = useState(null)
    const [userCard, setUserCard] = useState(null)
    const { id } = useParams() 
    useEffect(() =>{
        getCardId(id)
        .then(res => res.json())
        .then(r => {
            setCard(r)
        })
    }, [id])
    useEffect(() =>{
        if(user){
            const {localId} = user
            getUserId(localId)
            .then(res => res.json())
            .then(r => setUserCard(r))
        }
    }, [isFetching])
    const apllcation = (phone, tarifBtn, setPhone, setTarifBtn) =>{
        if(phone && tarifBtn ){
            if(userCard.age >= card.born_year && userCard.stage >= card.stage){
                alert('Вы можете заказать акто позвониф по этому номеру +9968765645321  ')
                putUserHisoryCard(user.localId,id,card)
                setIsFetching(false)
            }else{
                alert('Вы не можете взять эту машину')
            }
        }else{
            alert('Не вся поля заполнены')
        }
    }
    return(
        <>
        
        <div className={cls.root}>
            {
                isFetching && user ? (
                    
                    <Statement card={card} setIsFetch={setIsFetching} onAppl={apllcation}/>    
                    
                ): isFetching && !user ?(
                    <RegState setIsFetch={setIsFetching}/>
                ) : null 
                
            }
            {
                card ? (
                    <>
                    <div key={card.cardId} className={cls.GGCard}>
                        <div className={cls.startCard}>
                            <h1>{card.mark}</h1>
                            <h3>{card.type} {card.model_type}</h3>
                            <div className={cls.img}>
                                <img src={card.image} alt={card.cardId}/>
                            </div>
                        </div>
                        <div className={cls.infoCard}>
                            <div className={cls.infoText1}>
                                <div className={cls.infoText1_card}>
                                    <div className={cls.infoText1_card_text}>
                                        <img src='https://pngimg.com/uploads/fuel/fuel_PNG38.png' key={card.cardId} alt={card.cardId}/>
                                    </div>
                                    <p>Бензин {card.fuel}</p>
                                </div>
                                <div className={cls.infoText1_card}>
                                    <div className={cls.infoText1_card_text}>
                                        <h2>{card.born_year}</h2>
                                    </div>
                                    <p>Возраст</p>
                                </div>
                                <div className={cls.infoText1_card}>
                                    <div className={cls.infoText1_card_text}>
                                        <h2>{card.stage}</h2>
                                    </div>
                                    <p>Стаж</p>
                                </div>
                                <div className={cls.infoText1_card}>
                                    <div className={cls.infoText1_card_text}>
                                        <h2>{card.place}</h2>
                                    </div>
                                    <p>Место</p>
                                </div>
                            </div>
                            <div className={cls.infoText2}>
                                <div className={cls.buttonCard}>
                                    <button onClick={(e) => {
                                        e.preventDefault()
                                        setIsFetching(true)}}><h1>Заказать авто</h1></button>
                                </div>
                             </div>
                            <div className={cls.infoText3}>
                                <div className={cls.sumCond}>
                                    <h1>Стоимость</h1>
                                    <h2>{card.min_price} сом/мин</h2>
                                    <h2>{card.day_price} сом/сутки</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SwiperImg key='235236525' photo={card.photo}/>
                    </>
                ) : <Loading />
            }
            <Instrucrion />
       </div>
        </>
 )
}

export default AutoCard;
