import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import Home from './views/Home';
import QueryView from './views/QueryView/QueryView'
import CountryDetails from './views/CountryDetails/CountryDetails';
import ActForm from './views/ActForm/ActForm';
import Footer from './Components/Footer';
import IncorrectPage from './views/IncorrectPage/IncorrectPage';
import LandingPage from './views/Landing/LandingPage';
import { Route, Switch } from 'react-router-dom';
//import { useDispatch } from 'react-redux';
import './App.css';

function App() {
  //const dispatch= useDispatch();

  return (
    <div className="App">

    <Switch>
        <Route path='/search/:queryParam'>
          <Header />
          < QueryView />
          <Footer />
        </Route>
        <Route exact path='/detail/:id'>
          <Header />
          <CountryDetails />
          <Footer />
        </Route>
        <Route exact path='/addrestaurant'>
          <Header />
          <ActForm />
          <Footer />
        </Route>
        <Route path='/home'>
          <Header />
          <NavBar />
          <Home />
          <Footer />
        </Route>
        <Route exact path='/' component={LandingPage}></Route>
        <Route path='*' component={IncorrectPage}></Route>
      </Switch>
        
    </div>
  );
}

export default App;
