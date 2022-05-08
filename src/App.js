import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './page/shared/Header/Header';
import Footer from './page/shared/Footer/Footer';
import Home from '../src/page/Home/Home/Home';
import InventoryPage from './page/InventoryPage/InventoryPage';
import SignUp from './page/SignUp/SignUp'

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/inventory/:id" element={<InventoryPage></InventoryPage>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
