import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home'
import Orders from './Pages/Orders/Orders';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/order' element={<Orders></Orders>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
