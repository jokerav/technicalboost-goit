import {useGetAllUsersQuery} from "../../store/usersAPI";
import User from '../user/user'
import "./userList.scss"
import {useDispatch, useSelector} from "react-redux";
import {getPage} from "../../store/selectors";
import {useEffect, useState} from "react";
import {addPage, resetPage} from "../../store/dataSlice";

const UsersList = () => {
    const dispatch = useDispatch();
    const {data = []} = useGetAllUsersQuery();
    let page = useSelector(getPage);
    let [visibleUsers, setVisibleUsers] = useState(data.slice(0, 8));
    useEffect(() => {
        setVisibleUsers(data.slice(0, page * 8))
    }, [page, data])
    return (
        <div>
            <ul className='userList'>
                {visibleUsers.length > 0 && visibleUsers.map(user =>
                    <User
                        key={user.id}
                        user={user}
                    />
                )}
            </ul>
            {page <= 8 ?
                <button className='btnFollow' onClick={() => {
                    dispatch(addPage());
                }}>Load more</button>
                :
                <button className="btnFollow" onClick={() => {
                    dispatch(resetPage());
                    window.scrollTo({top:0, behavior: 'smooth'})
                }}>Reset page</button>}


        </div>
    )

}
export default UsersList