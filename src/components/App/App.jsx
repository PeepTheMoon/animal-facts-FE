import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import FactForm from '../../components/form/FactForm';
import FactsPage from '../../components/facts/FactsPage';
import Header from '../header/Header';
import Signup from '../auth/Signup';

export default function App() {
  return (
    <Router>
      <Header />
      <FactForm /> 
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route exact path="/" component={FactsPage} />
      </Switch>
    </Router>
  );
}
