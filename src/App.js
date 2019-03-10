import React from 'react';
import { BrowserRouter  as Router, Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import Login from "./login.js"
import axios from "axios";

axios.defaults.baseURL = 'http://47.96.21.88:8086/'; 
// axios.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response.data;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

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
