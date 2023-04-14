import './user.scss'
import {ReactComponent as Logo} from "../../img/logo.svg";
import boy from '../../img/Boy.png'
import boy2x from '../../img/Boy@2x.png'

const User = ()=>{
    return(
        <div className='card'>
            <Logo className='logo'/>
            <div className='picture'></div>
            <div className='line'></div>
            <picture>
                <source srcSet={`${boy2x} 2x, ${boy} 1x`}/>
                <img src='#' alt='Фото' className='photo'/>
            </picture>
        </div>
    )
}
export default User