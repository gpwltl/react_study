import React from 'react';
import Products from './Product'
import Posts from './Post';
import { Route, Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <React.Fragment>
            <h1>Admin Dashboard</h1>
            <p><Link to="/admin/products">Products</Link></p>
            <p><Link to="/admin/posts">Posts</Link></p>

            {/* 이중 라우팅 */}
            <Route path="/admin/products" component={Products} />
            <Route path="/admin/posts" component={Posts} />
        </React.Fragment>
    );
}

export default Dashboard;