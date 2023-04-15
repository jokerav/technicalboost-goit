import './user.scss'
import {ReactComponent as Logo} from "../../img/logo.svg";
import boy from '../../img/Boy.png'
import boy2x from '../../img/Boy@2x.png'
import {useDispatch, useSelector} from "react-redux";
import {getFollow} from "../../store/selectors";
import {addFollow, removeFollow} from "../../store/dataSlice";
import {useIncrementFollowersMutation, useDecrementFollowersMutation} from "../../store/usersAPI";

const User = ({user}) => {
    const dispatch = useDispatch();
    const follow = useSelector(getFollow);
    const [incrementFollowers] = useIncrementFollowersMutation();
    const [decrementFollowers] = useDecrementFollowersMutation()
    const {tweets, followers, id} = user;
    const isFollowing = follow.includes(id);
    const handleClick = () => {
        if (!isFollowing) {
            dispatch(addFollow({id}));
            incrementFollowers({id, followers: followers +1});
        }
        if (isFollowing){
            dispatch(removeFollow({id}));
            decrementFollowers({id, followers: followers - 1})
        }
    }
    return (
        <div className='card'>
            <Logo className='logo'/>
            <div className='picture'></div>
            <div className='line'></div>
            <picture className='photo'>
                <source srcSet={`${boy2x} 2x, ${boy} 1x`}/>
                <img src='#' alt='Фото'/>
            </picture>
            <div className='tweets'>{`${tweets} tweets`}</div>
            <div className='followers'>{`${followers} followers`}</div>

            <button className={isFollowing? 'btnFollow isFollow' :"btnFollow"} onClick={() => handleClick()}>{isFollowing ? 'following' : "follow"}</button>
        </div>
    )
}
export default User