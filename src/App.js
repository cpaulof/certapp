import axios from 'axios'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/login'
import Signup from './pages/signup'
import Document from './pages/send_document';
import GetDocument from './pages/get_document';
import ListDocument from './pages/list_document';
import Profile from './pages/profile';
import NavBar from './components/navbar';
import { createTheme, ThemeProvider } from '@mui/material';
import { useEffect } from 'react';

const theme =  createTheme({
  breakpoints:{
    xs: false,
  },
  palette: {
    type: 'light',
    primary: {
      main: '#8860e2',
    },
    secondary: {
      main: '#d84578',
    },
    background: {
      default: '#c3c3c3',
      paper: '#f1eded',
    },
    text: {
      primary: 'rgba(41,41,41,0.87)',
      secondary: 'rgba(84,83,83,0.7)',
    },
  },
});

axios.defaults.withCredentials = false

function App() {
  useEffect(()=>{
    localStorage.setItem("credentials", 
    JSON.stringify({
      "refresh":"ThlYalk",
      "access":"MIUE",
      "user":
        {"id":4,
        "username":"userrer",
        "email":"abc@abc.com",
        "is_active":true}}))
  }, [])
  return (
    <ThemeProvider theme={theme} >
    <NavBar />
    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="signup" element={<Signup />} />
          <Route path="document" element={<Document />} />
          <Route path="get-document" element={<GetDocument />} />
          <Route path="list-document" element={<ListDocument />} />
          <Route path="*" element={<div><h1>NOT FOUND</h1></div>} />
        </Routes>
      </BrowserRouter>
    </div>
    </ThemeProvider>

  );
}

export default App;
