import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="main-header navbar navbar-expand navbar-light">

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="#" className="nav-link">Inicio</a>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                            <i className="fas fa-expand-arrows-alt"></i>
                        </a>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="#">
                            <i className="fas fa-regular fa-user"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <a href="#" className="dropdown-item">
                                <div className="media">
                                    <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            Nombre del usuario
                                        </h3>
                                        <p className="text-sm">Ver mi perfil</p>
                                    </div>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item dropdown-footer">Cerrar Sesión</a>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>

    );
}

export default Header;
