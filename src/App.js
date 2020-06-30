import React from 'react';
import logo from './logo.svg';
import './App.css';
import Covid19 from './components/Covid19/Covid19';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import CountryDetail from './components/CountryDetail/CountryDetail';
import Blogs from './components/Blogs/Blogs';
import News from './components/News/News';
import Doctor from './components/Doctor/Doctor';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <Covid19></Covid19>
          </Route>
          <Route path='/home'>
            <Covid19></Covid19>
          </Route>
          <Route path="/country/:countryName">
            <CountryDetail></CountryDetail>
          </Route>
          <Route path="/blog">
            <Blogs></Blogs>
          </Route>
          <Route path="/news">
            <News></News>
          </Route>
          <Route path="/doctor">
            <Doctor></Doctor>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
