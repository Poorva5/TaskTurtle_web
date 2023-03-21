import './App.css';
import { Provider } from 'react-redux';
import store from './store/store.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginForm from './components/Auth/LoginForm';

function App() {
  return (
    <div className="App" style={{backgroundColor: '#ecfff9', height: '100vh'}}>
     <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/login' element={<LoginForm/>}></Route>
        </Routes>
      </BrowserRouter>
     </Provider>
    </div>
  );
}

export default App;
