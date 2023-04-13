import './App.css';
import {useGetUserByIDQuery, useGetAllUsersQuery} from "./store/usersAPI";
import User from './components/user/user'

function App() {
  const {data:allUsers=[]} = useGetAllUsersQuery()
  const {data:user={}} = useGetUserByIDQuery(2);
  console.log(allUsers)
  console.log(user)

  return (
    <div className="App">
      <User/>
    </div>
  );
}

export default App;
