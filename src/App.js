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
import News from './components/News/News';
import Doctor from './components/Doctor/Doctor';
import NotFound from './components/NotFound/NotFound';
import CovidDataGraph from './components/CovidDataGraph/CovidDataGraph';
import Info from './components/Info/Info';


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
          <Route path='/graph'>
            <CovidDataGraph></CovidDataGraph>
          </Route>
          <Route path="/country/:countryName">
            <CountryDetail></CountryDetail>
          </Route>
          <Route path="/info">
            <Info></Info>
          </Route>
          <Route path="/news">
            <News></News>
          </Route>
          <Route path="/doctor">
            <Doctor></Doctor>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
