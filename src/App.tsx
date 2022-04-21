import { UserPage } from './pages/UsersPage';
import { store } from './redux/Store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserPage />
      </div>
    </Provider>
  );
}

export default App;
