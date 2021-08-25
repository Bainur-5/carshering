import { Switch, Route, Redirect } from "react-router-dom"
import Auth from "../../Components/Login"
import Registr from "../../Components//Registr"
import User from "../User"
import About from "./About"
import Auto from "./Auto"
import AutoCard from "./AutoCard"
import Home from "./Home"
import { user } from "../../API/api"

const Main = () =>{
    return (
        <Switch>
            {
                user ? (
                <>
                    <Route path='/' exact component={Home}/>
                    <Route path='/Auto' exact component={Auto}/>
                    <Route path='/About' exact component={About}/>
                    <Route path='/AutoCard/:id' exact component={AutoCard}/>
                    <Route path='/User' exact component={User}/>
                </>
                ) : (
                    <>
                            
                        <Route path='/' exact component={Home}/>
                        <Route path='/Auto' exact component={Auto}/>
                        <Route path='/About' exact component={About}/>
                        <Route path='/AutoCard/:id' exact component={AutoCard}/>
                        <Route path='/User' exact component={User}/>
                        <Route path='/Register' exact component={Registr}/>
                        <Route path='/Login' exact component={Auth}/>
                    </>                    
                )
            }
            <Redirect to='/'/>
            
        </Switch>
    )
}
export default Main