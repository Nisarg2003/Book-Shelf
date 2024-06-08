import logo from './logo.svg';
import {Routes,Route, Navigate} from 'react-router-dom'
import './App.css';
import HomePage from './Pages/homePage';
import MyBooks from './Pages/myBooks';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/myBooks' element={<MyBooks/>} />
    </Routes>
    </>
  );
}

export default App;
