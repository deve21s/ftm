import "./App.css";
import "./index.css";
import Login from "./components/Login";
import Ragister from "./components/ragister";
// import Dashboard from "./components/Deshboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Family from "./components/Family";
import Createtask from "./components/Createtask";
import Setpassword from "./components/Setpassword";
import Edittask from "./components/Edittask";
import Task from "./components/Task";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/ragister" component={Ragister} />
          <Route path="/family" component={Family} />
          <Route path="/createtask" component={Createtask} />
          <Route path="/tasks" component={Task} />
          <Route path="/edittask/:taskid" component={Edittask} />
          <Route path="/setpassword/:token" component={Setpassword} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
