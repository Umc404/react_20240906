import './App.css';
import StoreList from './component/StoreList';
import UserList from './component/UserList';

function App() {
  return (
    <div className="App">
      <UserList />
      <br />
      <hr/>
      {/* 맛집 리스트 추가하는 기능
          ex) 월미당(쌀국수)
      */}
      <StoreList />
    </div>
  );
}

export default App;
