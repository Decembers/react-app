//import logo from './logo.svg';
import React from "react";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Empty from "./View/Empty";
import Home from "./View/Home";
import Login from "./View/Login";
import {AuthLogin} from "./Components/Auth"
import './App.scss';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">

    //     <h3>name</h3>
    //   </header>
    // </div>
    <Router>
      <Switch>
        <Route path="/" exact reder={(props) => {
          return <Redirect to="/Home"></Redirect>
        }}> </Route>
        <Route path="/Home" render={(props) => {
          //校验用户是否登录 如未登录，跳转登录
            if(!AuthLogin()){
              //跳转到登录页面前，记录当前请求页面，登录成功后跳转到用户之前请求页面
              // return <Redirect to="/Login"></Redirect> {`${match.url}/detail/:id`} 
              // return <Redirect to={/login?preurl=${props.match.path}}></Redirect>
              return <Redirect to={`/login?preurl=${props.match.path}`}  ></Redirect>
            }
        //校验权限
          return <Home {...props}></Home>
        }}></Route>
        <Route path="/Login" component={Login} ></Route>
        <Route component={Empty}></Route>
      </Switch>
    </Router>
  );
}

export default App;
