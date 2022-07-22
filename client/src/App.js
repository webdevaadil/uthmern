import React from 'react';
import {Route,Routes,Navigate ,BrowserRouter} from  "react-router-dom"
import { Main } from "./components/Main/Main";
import { Signup } from './components/Signup/Signup';
import { Login } from './components/Login/Login';
import {Loader}  from "./components/layout/Loader"
import { ProfileNav } from "./components/Profile/ProfileNav";
import { AccountSetting } from "./components/Profile/AccountSetting";
import {PaymentMethoad} from "./components/Profile/PaymentMethoad"
import { Profile } from "./components/Profile/Profile";
import { Dashboard} from "./components/Profile/Dashboard";
import { Header } from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Sports} from "./components/Main/Sports"

function App() {
  const user = localStorage.getItem("token")
  return (
<>
<BrowserRouter>
    <Routes>
    <Route path="/" exact element={<Main/>}/>
    <Route path = "/sports" exact element = {<Sports/>}/>
     <Route path="/signup" exact element={<Signup/>}/>
     <Route path="/login" exact element={<Login/>}/>
     <Route path="/dashboard" element={<Dashboard />}>
            <Route path="" element={<Profile/>} />
            <Route path="payment" element={<PaymentMethoad />} />
            <Route path="accountsetting" element={<AccountSetting />} />
          </Route>
    </Routes>
  
    </BrowserRouter>
</>
  );
}

export default App;
