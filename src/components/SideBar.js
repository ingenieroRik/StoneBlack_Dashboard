import React from 'react';
import image from '../assets/images/logo-StoneBlack.png';
import ContentWrapper from './ContentWrapper';
import User from './User';
import Products from './Products';
import NotFound from './NotFound';
import Ventas from './Ventas';

import {Link, Route, Switch} from 'react-router-dom'; // hacer -----------> npm install react-router-dom

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="https://stoneblack.onrender.com/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt=""/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - StoneBlack</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Opciones</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/User">
                        <i className="fas fa-fw fa-user"></i>
                        <span>Usuarios</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/Products">
                        <i className="fas fa-fw fa-tshirt"></i>
                        <span>Productos</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/Ventas">
                        <i className="fas fa-fw fa-sack-dollar"></i>
                        <span>Ventas</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>

                <Route path="/User">
                    <User />
                </Route>

                <Route path="/Products">
                    <Products />
                </Route>

                <Route path="/Ventas">
                    <Ventas />
                </Route>

                <Route component={NotFound} />                                     
                
            </Switch>
            {/*<!-- End of Sidebar -->*/}
            
        </React.Fragment>
    )
}
export default SideBar;