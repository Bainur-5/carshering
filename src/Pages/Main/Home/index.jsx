import Instrucrion from "../../../Components/Instruction"
import Sedan from "../../../Components/Sedan"
import cls from './Home.module.scss'
const Home = () =>{
    return(
        <div className={cls.root}>
            <div className={cls.start}>
                <div className={cls.start_text}>
                    <h1>Новый умный взгляд на владение автомобилем!</h1>
                    <p>Каршеринг — это вид краткосрочной аренды автомобиля с поминутной тарификацией. Поездки внутри города и вне города</p>
                </div>
            </div>
            <div className={cls.cars}>
                <h1 className={cls.cars_text}>Авто</h1>
                <Sedan/>
            </div>
            <Instrucrion/>
        </div>
    )
}
export default Home