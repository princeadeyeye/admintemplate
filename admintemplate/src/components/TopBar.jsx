import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBCollapse, MDBNavItem } from 'mdbreact';

class TopBar extends Component {

    render() {
        return (
        	<MDBNavbar className="flexible-navbar topbar" light expand="md" scrolling>
                <MDBNavbarBrand href="/">
                    <strong id='topbar-logo'>TransMonitor</strong>
                </MDBNavbarBrand>
                <MDBCollapse navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem>
                        	<i class="fas fa-search topbar-input-icon"></i><span>
                        	<input id='topbar-input' placeholder='Search' /></span>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right className='topbar-right'>
                        <MDBNavItem id="one">
                            <a className="nav-link navbar-link" rel="noopener noreferrer" target="_blank" href="/">Support</a>
                        </MDBNavItem>
                        <MDBNavItem id="two">
                            <a className="nav-link navbar-link" rel="noopener noreferrer" target="_blank" href="/">FAQ</a>
                        </MDBNavItem>
                        <MDBNavItem id="three">
                            <a className="nav-link navbar-link" rel="noopener noreferrer" href="/" target="_blank"><i class="far fa-bell"><sup>3</sup></i></a>
                        </MDBNavItem>
                        <MDBNavItem id="four">
                        	<div className="topbar-right-profile">
                        		<span>Hello</span>
                            	<a className="nav-link navbar-link" href="/" target="_blank">Oluwaleke Ojo</a>
                            	<img className="border border-light rounded mr-1 Ripple-parent" src='' alt='a' />
                        	</div>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default TopBar;
