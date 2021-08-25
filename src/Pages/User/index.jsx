import { useEffect, useState } from 'react'
import { FaPen } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import { getCards, getUserId } from '../../API'
import { baseURL, user } from '../../API/api'
import { getUserRoute } from '../../API/routes'
import History from '../../Components/History'
import Loading from '../../Components/Loading/Loading'
import cls from './User.module.scss'
const User = () =>{
    const [card, setCard] = useState(null)
    const history = useHistory()
    const [userCard, setUserCard] = useState(null)    
    const [edit, setEdit] = useState(null)
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
        if(user){
            const {localId} = user
            getUserId(localId)
            .then(res => res.json())    
            .then(r => setUserCard(r))
        }
    },[edit])
    
    const onEdit = (e) =>{        
        e.preventDefault()
        const nameP = prompt('Имя', userCard.mame)
        const sur = prompt('Фамилия', userCard.surname)
        fetch(`${baseURL}/${getUserRoute}/${user.localId}.json`,{
            method: 'PATCH',
            body: JSON.stringify({
                name: nameP,
                surname: sur
            })
        })
        .then(res => res.json())
        .then(r => setEdit(r))
    }
    const onExit = (e) =>{  
        e.preventDefault()
        localStorage.removeItem('user')
        history.push('/Login')
        setTimeout(() =>{
            window.location.reload()
        },100)
    }
    return(
        <>
        {
            user && (
                
                userCard ?(
                    <div className={cls.root}>
                        <div className={cls.cont_user}>
                            <div className={cls.user_name}>
                                <h1>{userCard.name} {userCard.surname}</h1>
                                <div onClick={onEdit}>
                                    <FaPen className={cls.icon}/> Редактировать
                                </div>
                            </div>
                            <div className={cls.info_exit}>                                
                                <div className={cls.info}>
                                    <div className={cls.text}>
                                        <b>{userCard.stage}</b>
                                        <p>Стаж</p>
                                    </div>
                                    
                                    <div className={cls.text}>
                                        <b>{userCard.age}</b>
                                        <p>Возраст</p>
                                    </div>
                                </div>
                                <div className={cls.exit}>
                                    <div onClick={onExit}>
                                        <h1>Выход</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cls.history}>
                            
                            {
                                card ? (
                                    
                                    <History/>
                                ) : <h1 className={cls.empty}>Пусто</h1>
                            }
                        </div>

                    </div>
            
                ) : <Loading/> 
            ) 
        }
        </>
    )
}
export default User