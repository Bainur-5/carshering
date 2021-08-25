import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { postUserUp, putUserId } from '../../API'
import cls from './Registr.module.scss'
const Registr = () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [right, setRight] = useState(null)
    const [age, setAge] = useState('18')
    const [stage, setStage] = useState('0')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [disabledBtn, setDisabledBtn] = useState(false)
    const ageCont = [18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,]
    const history = useHistory()
    const signUp = () =>{
        if(email && password && right && age && stage && name && surname){
            if(right === 'true'){
                setDisabledBtn(true)
                postUserUp(
                    {
                    email,
                    password,
                    returnSecureToken: true
                })
                .then(res => res.json())
                .then(r => {
                    const userId = r.localId
                    localStorage.setItem('user', JSON.stringify(r))
                    putUserId(userId,{
                        email,
                        name,
                        surname,
                        stage,
                        age,
                        history: ''
                    })
                    .then(res => res.json())
                    .then(r => console.log(r))
                    setDisabledBtn(false)
                    history.push('/Login')
                })
            }else(
                alert('no')
            )
        }else{
            alert('Все даные поля должны быть заполнены')
        }
    }   
    return(
        <div className={cls.root}>
            <div className={cls.cont_card}>
                <h3>Регистрация</h3>
                <div className={cls.card}>
                    <div>
                        <input className={cls.em_Pas} onChange={e => setEmail(e.target.value)} value={email} type="email" id='email'  placeholder='Email'/>
                    </div>
                    <div>
                        <form action="#">
                            <input type="password" className={cls.em_Pas} onChange={e => setPassword(e.target.value)} placeholder='Пароль' name='password' autoComplete='on'/>
                        </form>
                    </div>
                    <div>
                        <input className={cls.em_Pas} onChange={e => setName(e.target.value)} placeholder='Имя' type="text" />
                    </div>
                    <div>
                    <input className={cls.em_Pas} onChange={e => setSurname(e.target.value)}placeholder='Фамилия' type="text" />
                    </div>
                    <div className={cls.select}>
                        
                        <div>
                            <p>Возраст</p>
                            <select size="1" onChange={e => setAge(e.target.value)} name="user_age">
                                {
                                    ageCont.map(item => <option key={`${item}`} value={`${item}`}>{item}</option>)
                                }
                            </select>
                        </div>
                        <div>
                            <p>Стаж</p>
                            <select size='1' onChange={e => setStage(e.target.value)} name="user_stage" id="stage">
                                <option key='0' value="0">0</option>
                                <option key='1' value="1">1</option>
                                <option key='2' value="2">2</option>
                                <option key='3' value="3">3</option>
                                <option key='4' value="4">4</option>
                                <option key='4+' value="4+">4+</option>
                            </select>
                        </div>
                    </div>  
                    <div className={cls.right}>
                        <p>У вас есть водительские права ?</p>
                        <div>
                            <div>
                                <input type="radio" onChange={e => setRight(e.target.value)} name="rights" id="yes" value={true} />
                                <label htmlFor='yes'>Да</label>
                            </div>
                            <div>
                                <input onChange={e => setRight(e.target.value)}   type="radio" name="rights" id="no" value={false} />
                                <label htmlFor='no'>Нет</label>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className={cls.cont_Btn}>
                    <button onClick={e => {
                        e.preventDefault()
                        signUp()
                    }} disabled={disabledBtn} className={cls.btn}>Зарегистрироватся</button>
                </div>
            </div>
        </div>
    )
}
export default Registr