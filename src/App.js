import './App.css';
import {useGetUserByIDQuery} from "./store/usersAPI";
import UsersList from "./components/usersList/usersList";

function App() {

  const {data:user={}} = useGetUserByIDQuery(2);
  console.log(user)

  return (
    <div className="App">
      <UsersList/>
    </div>
  );
}

export default App;
