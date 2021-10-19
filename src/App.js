
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import Login from './components/Login/Login/Login';
import Registar from './components/Registar/Registar';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import About from './components/About/About';
import Doctors from './components/Doctors/Doctors';
import OurServices from './components/OurService/OurServices';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route path="/ourServices">
              <OurServices></OurServices>
            </Route>
            <PrivateRoute path="/ServiceDetails/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/registar">
              <Registar></Registar>
            </Route>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
