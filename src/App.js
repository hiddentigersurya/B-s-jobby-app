import {Route, Switch, Redirect} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import ProtectedRoute from './ProtectedRoute'
import Jobs from './Jobs'
import JobItemDetails from './JobItemDetails'
import NotFound from './NotFound'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={Jobs} />
    <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
    <Route path="/bad-path" component={NotFound} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
