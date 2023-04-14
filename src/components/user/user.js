import './user.scss'
import {ReactComponent as Logo} from "../../img/logo.svg";

const User = ()=>{
    return(
        <div className='card'>
            <Logo className='logo'/>
            <div className='picture'></div>
            <div className='line'></div>
        </div>
    )
}
export default User