import './App.css';
import { Provider } from 'react-redux';
import store from './store/store.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginForm from './components/Auth/LoginForm';
import SignUpForm from './components/Auth/SignUpForm';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
     <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/login' element={<LoginForm/>}></Route>
          <Route path='/signup' element={<SignUpForm/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
     </Provider>
    </div>
  );
}

export default App;
