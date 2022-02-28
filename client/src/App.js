import "./App.css";
import AddNewUser from "./comp/AddNewUser";
import UserList from "./comp/UserList";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <UserList />
      <AddNewUser/>
    </div>
  );
}

export default App;
