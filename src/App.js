
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import PrivetRoute from './Pages/PrivetRoute/PrivetRoute';
import Contact from './Pages/Contact/Contact';

import Edit from './Pages/Contact/Edit/Edit';
import View from './Pages/Contact/View/View';
import AuthProvider from './Pages/Context/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivetRoute path="/contact">
              <Contact></Contact>
            </PrivetRoute>

            <Route path="/update/:id">
              <Edit></Edit>
            </Route>
            <Route path="/view/:id">
              <View></View>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
