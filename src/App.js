
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
import Database from './Pages/Database/Database';
import Edit from './Pages/Contact/Edit/Edit';
import View from './Pages/Contact/View/View';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/database">
            <Database></Database>
          </Route>
          <Route path="/update/:id">
            <Edit></Edit>
          </Route>
          <Route path="/view/:id">
            <View></View>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
