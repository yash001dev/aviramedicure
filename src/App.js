import logo from './logo.svg';
import './App.css';
import SignIn from './components/sign-in/sign-in.components';
import Dashboard from './pages/dashboard/dashboard.component';
import Error from './pages/error404/error404.component';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact={true}>
        <SignIn/>
      </Route>

      <Route path="/admin">
        <Dashboard/>
      </Route>

      <Route path="*">
        <Error />
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
