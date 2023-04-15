import './user.scss'
import {ReactComponent as Logo} from "../../img/logo.svg";
import boy from '../../img/Boy.png'
import boy2x from '../../img/Boy@2x.png'

const User = ({user})=>{
    const {tweets, followers} = user;
    return(
        <div className='card'>
            <Logo className='logo'/>
            <div className='picture'></div>
            <div className='line'></div>
            <picture className='photo'>
                <source srcSet={`${boy2x} 2x, ${boy} 1x`}/>
                <img src='#' alt='Фото' />
            </picture>
            <div className='tweets'>{`${tweets} tweets`}</div>
            <div className='followers'>{`${followers} followers`}</div>
            <button className='btnFollow'>follow</button>
        </div>
    )
}
export default User