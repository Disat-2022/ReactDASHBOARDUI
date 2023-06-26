import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/pages/layout";
import Home from './components/pages/home';
import Contact from './components/pages/contact';
import Login from './components/pages/auth/loginreg';
import SendPasswordResetEmail from './components/pages/auth/sendpasswordresetemail';
import ResetPassword from './components/pages/auth/resetpassword';
import Dashboard from './components/pages/dashboard';
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="reset" element={<ResetPassword />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
