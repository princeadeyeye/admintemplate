import React, {Component} from 'react';
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';
class SideBar extends Component {

    render() {
        return (
            <div className="sidebar-fixed position-fixed mt-4">


                <NavLink exact={true} to="/" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <button className='btn btn-success'>Generate Invoice</button>
                    </MDBListGroupItem>
                </NavLink>
                <MDBListGroup className="list-group-flush">
                	<h5 className='mb-1'>Main</h5>
                <NavLink to="#!" activeClassName="activeClass">
                        Overview
                </NavLink>
                <NavLink to="/tables" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="table" className="mr-3"/>
                        Tables
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/maps" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="map" className="mr-3"/>
                        Maps
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/404" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="exclamation" className="mr-3"/>
                        404
                    </MDBListGroupItem>
                </NavLink>
            </MDBListGroup>
        </div>
        );
    }
}

export default SideBar;
