import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';


import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import ServiciosPage from './pages/ServiciosPage';
import NovedadesPage from './pages/NovedadesPage';
import GaleriaPage from './pages/GaleriaPage';
import ContactoPage from './pages/ContactoPage';


function App() {
  return (
    <><div className="App">
    </div>
      <Router>
        <Header />
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/nosotros" exact component={NosotrosPage} />
          <Route path="/servicios" exact component={ServiciosPage} />
          <Route path="/novedades" exact component={NovedadesPage} />
          <Route path="/galeria" exact component={GaleriaPage} />
          <Route path="/contacto" exact component={ContactoPage} />

        </Switch>
        <Footer />
      </Router></>
  );
}

export default App;

