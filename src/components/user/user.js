import './user.scss'
import {ReactComponent as Logo} from "../../img/logo.svg";
import boy from '../../img/Boy.png'
import boy2x from '../../img/Boy@2x.png'
import {useDispatch, useSelector} from "react-redux";
import {getFollowList} from "../../store/selectors";
import {addFollow, removeFollow} from "../../store/dataSlice";
import {useIncrementFollowersMutation, useDecrementFollowersMutation} from "../../store/usersAPI";
import {useState} from "react";


const User = ({user}) => {
    const followList = useSelector(getFollowList);
    const {id, tweets, followers} = user;
    let [nowFollows, setNowFollows] = useState(followers);
    const dispatch = useDispatch();

    const [incrementFollowers] = useIncrementFollowersMutation();
    const [decrementFollowers] = useDecrementFollowersMutation();


    const isFollowing = followList.includes(id);
    const handleClick = () => {
        if (!isFollowing) {
            incrementFollowers({id, followers: followers});
            dispatch(addFollow({id}));
            setNowFollows(followers+1)
        }
        if (isFollowing){
            decrementFollowers({id, followers: followers})
            dispatch(removeFollow({id}));

            setNowFollows(followers-1)
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
            <div className='followers'>{`${nowFollows} followers`}</div>

            <button className={isFollowing? 'btnFollow isFollow' :"btnFollow"} onClick={() => handleClick()}>{isFollowing ? 'following' : "follow"}</button>
        </div>
    )
}
export default User