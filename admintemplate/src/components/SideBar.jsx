import React, {Component} from 'react';
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';
class SideBar extends Component {

    render() {
        return (
            <div className="sidebar-fixed mt-4">
                <NavLink exact={true} to="/" activeClassName="">
                        <button className='btn btn-success sidebar-btn'>Generate Invoice</button>
                </NavLink>
                	<div className='mb-1 sidebar-heading'>Main</div>
                <NavLink className='sidebar-overview' to="#!" activeClassName="activeClass">
                        Overview
                </NavLink>
                <MDBListGroup className="list-group-flush sidebar-payments-heading">
                	 <p>Payments</p>
                	 <NavLink to="# !" activeClassName="">
                    <MDBListGroupItem>
                        <i class="fas fa-list-alt mr-2"></i>
                        All Payments
                    </MDBListGroupItem>
                    </NavLink>

                     <NavLink to="# !" activeClassName="">
                    <MDBListGroupItem>
                        <i class="far fa-list-alt mr-2"></i>
                        Reconcilled Payments
                    </MDBListGroupItem>
                    </NavLink>

                    <NavLink to="# !" activeClassName="">
                    <MDBListGroupItem>
                        <i class="fas fa-clipboard-list mr-2"></i>
                        Un - Reconcilled Payments
                    </MDBListGroupItem>
                    </NavLink>

                	 <NavLink to="# !" activeClassName="">
                    <MDBListGroupItem>
                       <i class="fas fa-record-vinyl mr-2"></i>
                        Manual Settlement
                    </MDBListGroupItem>
                    </NavLink>
                   </MDBListGroup>

  				<MDBListGroup className="list-group-flush">
                	 <p>Orders</p>
                	 <NavLink to="# !" activeClassName="">
                    <MDBListGroupItem>
                        <i class="far fa-clipboard mr-2"></i>
                        All Orders
                    </MDBListGroupItem>
                    </NavLink>

                     <NavLink to="# !" activeClassName="">
                    <MDBListGroupItem>
                        <i class="fas fa-clipboard mr-2"></i>
                        Pending Orders
                    </MDBListGroupItem>
                    </NavLink>

                    <NavLink to="# !" activeClassName="">
                    <MDBListGroupItem>
                        <i class="fas fa-clipboard-list mr-2"></i>
                        Reconcilled Orders
                    </MDBListGroupItem>
                    </NavLink>

                     <NavLink to="# !" activeClassName="">
                        <i class="fas fa-user-tie mr-2"></i>
                       Merchant Profile
                    </NavLink>
                   </MDBListGroup>


        		</div>
        );
    }
}

export default SideBar;
