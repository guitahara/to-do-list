import { history } from '../helpers/index';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import TodoPage from '../pages/TodoPage/TodoPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import { PrivateRoute } from '../components/index';

function AppRoutes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/login' component={LoginPage}></Route>
        <Route path='/register' component={RegisterPage}></Route>
        <PrivateRoute exact path='/' component={TodoPage}></PrivateRoute>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
