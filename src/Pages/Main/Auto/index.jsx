import { useState } from "react"
import cls from './Auto.module.scss'
import { RuClassAuto } from "../../../Components/ClassName"
import Mark from "../../../Components/Mark"
const Auto = () => {
    
    const [ruClassName, setRuClassName] = useState('Все Авто')
    const [click, setClick] = useState(false)
    return(
        
        <div className={cls.root}>
            <div className={cls.nav}>
                <p className={cls.title}>{ruClassName}</p>
                <div className={cls.katalog}>  
                {
                    !click ? (
                        RuClassAuto.map(item =>{
                            return <div key={item.mark}  onClick={() =>{
                                setRuClassName((prev) =>{
                                    return prev = item.mark
                                })
                                setClick(true)
                            }}><button>{item.mark}</button></div>
                        })
                    ) :(
                        <>
                            {
                                RuClassAuto.map(item =>{
                                    return <div key={item.mark}  onClick={() =>{
                                        setRuClassName((prev) =>{
                                            return prev = item.mark
                                        })
                                        setClick(true)
                                    }}><button>{item.mark}</button></div>
                                })
                            }
                            <div key={'Все Авто'} onClick={() =>{
                                setClick(false)
                                setRuClassName('Все Авто')
                            }}><button>Все</button></div>
                        </>
                    )
                }
                </div>
               <Mark mark={ruClassName}/>
            </div>
        </div>
    )
}
export default Auto