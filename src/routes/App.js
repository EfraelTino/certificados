import '../App.css';
import Dashboard from '../components/Dashboard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Menu from '../components/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Gestor from '../components/container/Gestor';
import Home from '../components/Home';
import Certificados from '../components/container/Certificados';

function App() {
  return (
    // <div className="wrapper">
    //   <Header />
    //   <Menu />
    //   <Dashboard />
    // </div>
    <BrowserRouter>
    <Header/>
    <Menu/>
    <Dashboard/>
      <Routes>
      <Route exact path='/prueba' element={<Home/>}/>
        <Route exact path='/' element={<Gestor/>}/>
        <Route exact path='/certificados' element={<Certificados/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
