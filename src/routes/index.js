import { history } from '../helpers/index';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import TodoPage from '../pages/TodoPage/TodoPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';

function AppRoutes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/login' component={LoginPage}></Route>
        <Route path='/register' component={RegisterPage}></Route>
        <Route path='/' component={TodoPage}></Route>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
