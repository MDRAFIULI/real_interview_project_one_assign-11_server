import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './page/shared/Header/Header';
import Footer from './page/shared/Footer/Footer';
import Home from '../src/page/Home/Home/Home';
import InventoryPage from './page/InventoryPage/InventoryPage';
import SignUp from './page/SignUp/SignUp'
import RequireAuth from './page/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import Login from './page/Login/Login';
import ManageInventory from './page/ManageInventory/ManageInventory';
import AddItem from './page/AddItem/AddItem';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/inventory/:id" element={<RequireAuth>
          <InventoryPage></InventoryPage>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route path='/manageInventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/addItem' element={<AddItem></AddItem>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
