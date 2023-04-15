import {useGetAllUsersQuery} from "../../store/usersAPI";
import User from '../user/user'
import "./userList.scss"

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