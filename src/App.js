import logo from './logo.svg';
import './App.css';
import HomePage from './Components/Pages/HomePage';
import ContactPage from './Components/Pages/ContactPage';
import ToDosPage from './Components/Pages/ToDosPage';
import Layout from './Components/Pages/Layout';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<HomePage />} />
          <Route path="/todos" element={<ToDosPage />} />
          <Route path="/contact" element={<ContactPage/>} /> 
        </Route>   
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
