import React, { Component } from 'react';
import NavBar from './NavBar';
import Products from './Product';
import Posts from './Post';
import ProductsDetail from './productDetail';
import Dashboard from './Dashboard';
import Home from './Home';
import { Route, Switch, Redirect } from 'react-router-dom'; // Route 컴포넌트 imort
import './App.css';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <h>NavBar^^</h>
        <div className="content">
          <Switch>
            <Route exact path="/products" component={Products} />
            <Route exact path="/products/:id" component={ProductsDetail} />
            <Route path="/posts/:year?/:month?" component={Posts} /> {/* year와 month는 선택적 매개변수 */}
            <Route path="/admin" component={Dashboard} />
            <Route exact path="/" component={Home} />
            <Redirect from="/message" to="/posts" /> {/* 주소/message 로 접속 시 주소/posts 로 리디렉션 */}
          </Switch></div>
      </React.Fragment>
    );
  }
}