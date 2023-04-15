import {useGetAllUsersQuery} from "../../store/usersAPI";
import User from '../user/user'
import "./userList.scss"
import {useState} from "react";
import {useSelector} from "react-redux";
import {getFollow} from "../../store/selectors";

const UsersList = () => {
    const {data = []} = useGetAllUsersQuery();
    return (
        <ul className='userList'>
            {data.length > 0 && data.map(user =>
                <User
                    key={user.id}
                    user={user}
                />
            )}
        </ul>
    )

}
export default UsersList