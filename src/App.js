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

axios.defaults.withCredentials = false

function App() {

  return (
    <div className="App">
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

  );
}

export default App;
