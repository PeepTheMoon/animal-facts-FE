import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import FactForm from '../../components/form/FactForm';

export default function App() {
  return (
    <Router>
      <FactForm />
      <Switch>
        <Route />
      </Switch>
    </Router>
  );
}
