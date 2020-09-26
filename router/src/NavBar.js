import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        // 콘텐츠 영역만 수정하기 위한 Link 컴포넌트 사용
        // <a href=></a> -> <Link to=></Link>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/products">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/posts/2019/09">Posts</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin" >Admin</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;