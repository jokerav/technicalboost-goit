import {useGetAllUsersQuery} from "../../store/usersAPI";
import User from '../user/user'

const UsersList=()=>{
    const {data=[]} = useGetAllUsersQuery()
    console.log(data)
    return (
        <ul>
            {data.length > 0 && data.map(user=>
            <User
                key={user.id}
                user={user}
            />
            )}
        </ul>
    )

}
export default UsersList