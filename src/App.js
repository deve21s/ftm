import "./App.css";
import "./index.css";
import Login from "./components/Login";
import Ragister from "./components/ragister";
// import Dashboard from "./components/Deshboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Family from "./components/Family";
import Setpassword from "./components/Setpassword";
import Edittask from "./components/Edittask";
import Task from "./components/Task";
import Taskdetails from "./components/Taskdetails";
import PrivateRoute from "./components/protected";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/ragister" component={Ragister} />
          <PrivateRoute component={Family} path="/family" />
          {/* <Route path="/family" component={Family} /> */}
          <PrivateRoute path="/tasks" component={Task} />
          <PrivateRoute path="/edittask/:taskid" component={Edittask} />
          <Route path="/setpassword/:token" component={Setpassword} />
          <PrivateRoute path="/taskdetails/:id" component={Taskdetails} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
