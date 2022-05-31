
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import SignInPage from './Components/Login';
import Navigation from './Components/Navigation';
import News from './Components/News';
import SignUpPage from './Components/Register';
import Statistics from './Components/Statistics';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/SignUpPage' element={<SignUpPage/>}></Route>
          <Route path='/Login' element={<SignInPage/>}></Route>
          <Route path='/Statistics' element={<Statistics/>}></Route>
          <Route path='/News' element={<News/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
