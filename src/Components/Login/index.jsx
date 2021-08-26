import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import cls from './Auth.module.scss'
const Auth = () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [disabledBtn, setDisabledBtn] = useState(false)
    const history = useHistory()
    const signIn = (em, pas, setEm, setPas) =>{   
        if(em !== '' && pas !== ''){
            setDisabledBtn(true)
            
            fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAQ3C9GzlzXmdUWR4FguOxRqcGPXTMjo2M`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: em,
                    password: pas,
                    returnSecureToken: true
                })

            })
            .then(res => res.json())
            .then(r => {
                console.log(r);
                localStorage.setItem('user', JSON.stringify(r))
                history.push('/User')
                setEm('')
                setPas('')
                setTimeout(() =>{
                    window.location.reload()
                },100)
            })

        }else{
            alert('Не вас поля заполнены')
        }
    }
    return(
        <div className={cls.root}>
            <div className={cls.cont_card}>
                <h3>Авторизация</h3>
                <div className={cls.card}>
                    <form action="#">
                        <input 
                        onChange={e => setEmail(e.target.value)}
                        type="email" value={email} name="email" id="eamil" placeholder='Email'/>
                        <input 
                        onChange={e => setPassword(e.target.value)}
                        type="password" placeholder='Пароль' name='password' autoComplete='on'/>
                        <div className={cls.cont_btn}>
                            <button onClick={e => {
                                e.preventDefault()
                                signIn(email, password, setEmail, setPassword)
                            }} className={`${cls.signIn} ${cls.btn}`}>Войти</button>
                        </div>
                        <div className={cls.cont_reg}>
                            <button onClick={e =>{
                                e.preventDefault()
                                history.push('/Register')
                            }} disabled={disabledBtn} className={`${cls.registr} ${cls.btn}`}>Регистрация</button>
                        </div> 
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Auth

