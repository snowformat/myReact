import React from 'react';
import { BrowserRouter  as Router, Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import Login from "./login.js"

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/show" component={Show}></Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </Router>
    );
  }
}
const  Home = () => {
  return <div>Home</div>
}
const Show = () => {
  return <div>Show</div>
}
export default App;
