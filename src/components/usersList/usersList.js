import {useGetAllUsersQuery} from "../../store/usersAPI";
import User from '../user/user'

const UsersList=()=>{
    const {data=[]} = useGetAllUsersQuery()
    return (
        <ul>
            {data.length > 0 && data.map(user=>
            <User
                key={user.id}
            />
            )}
        </ul>
    )

}
export default UsersList