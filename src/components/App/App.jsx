import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import FactForm from '../../components/form/FactForm';
import FactsPage from '../../components/facts/FactsPage';

export default function App() {
  return (
    <Router>
      <FactForm />
      <Switch>
        <Route exact path="/" component={FactsPage} />
      </Switch>
    </Router>
  );
}
