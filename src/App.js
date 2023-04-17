import './App.css';
import UsersList from "./components/usersList/usersList";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <UsersList/>
        <ToastContainer />
    </div>
  );
}

export default App;
