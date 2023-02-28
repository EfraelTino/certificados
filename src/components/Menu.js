import React from 'react';
import { Link } from 'react-router-dom';
const items = [
    { id: 1, name: "Gestor de plantillas", at: "/", icon:"nav-icon fas fa-th"},
    { id: 2, name: "Certificados", at: "/certificados", icon:"nav-icon fas fa-th" }
]
const Menu = () => {
    return (
        <div>
            <aside className="main-sidebar sidebar-light elevation-4">

                <a href="index3.html" className="brand-link">
                    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: ".8" }} />
                    <span className="brand-text font-weight-light">AdminLTE 3</span>
                </a>

                <div className="sidebar">

                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="userProfile" />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">Alexander Pierce</a>
                        </div>
                    </div>
                    <div className="form-inline">
                    </div>
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {items.map((item) => (
                                <li className="nav-item" key={item.id}>
                                    <Link to={item.at} className="nav-link">
                                        <i className={item.icon}></i>
                                        <p>
                                            {item.name}
                                        </p>
                                    </Link>
                                </li>
                            ))
                            }
                        </ul>
                    </nav>
                </div>
            </aside>
        </div>
    );
}

export default Menu;
