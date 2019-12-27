import React, {Component} from 'react';
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';
class SideBar extends Component {

    render() {
        return (
            <div className="sidebar">
                <div className='sidebar-btn'>
                    Generate Invoice
                </div>
                	<div className='sidebar-heading'>Main</div>
                <div className='sidebar-overview'>

                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.7298 6.34312C12.2684 6.50166 8.19503 7.92816 7.29996 8.97946C6.8194 9.54524 6.58721 10.2646 6.64633 11.0051C6.70578 11.7449 7.0496 12.4184 7.61406 12.8996C8.11576 13.3273 8.75487 13.5635 9.41312 13.5635C10.2286 13.5635 10.9992 13.2068 11.5276 12.5862C12.4217 11.5332 13.1784 7.27849 13.2616 6.79661C13.286 6.65491 13.2345 6.51157 13.1249 6.41777C13.0155 6.3243 12.8659 6.29556 12.7298 6.34312ZM10.909 12.0587C10.2329 12.8537 8.93421 12.9597 8.13955 12.2803C7.74023 11.9398 7.49681 11.4642 7.45519 10.94C7.41325 10.4159 7.5774 9.9069 7.91726 9.50693C8.4193 8.91704 10.6329 7.97044 12.3348 7.3462C11.9953 9.09341 11.4057 11.4748 10.909 12.0587ZM9.74011 -6.29969e-09C4.36934 -6.29969e-09 0 4.4387 0 9.89534C0 11.9765 0.680057 14.084 1.91532 15.8279C1.99129 15.9359 2.11482 16 2.24627 16H17.2343C17.3657 16 17.4893 15.9366 17.5652 15.8279C18.8008 14.084 19.4812 11.9603 19.4812 9.84877C19.4802 4.41822 15.1112 -6.29969e-09 9.74011 -6.29969e-09ZM17.0219 15.1865H2.45864C1.39512 13.6124 0.81151 11.7416 0.81151 9.89501C0.81151 4.88723 4.81688 0.812171 9.74011 0.812171C14.6633 0.812171 18.6687 4.86543 18.6687 9.84877C18.6687 11.7248 18.0854 13.612 17.0219 15.1865ZM9.74011 2.33908C5.96858 2.33908 2.90023 5.44244 2.90023 9.2569C2.90023 9.48182 3.08189 9.66315 3.30615 9.66315C3.53075 9.66315 3.71207 9.48116 3.71207 9.2569C3.71207 5.89063 6.41645 3.15191 9.74044 3.15191C13.0641 3.15191 15.7688 5.88106 15.7688 9.23477C15.7688 9.45969 15.9505 9.64135 16.1747 9.64135C16.3987 9.64135 16.5806 9.45936 16.5806 9.23477C16.5803 5.4322 13.512 2.33908 9.74011 2.33908Z" fill="#647787"/>
                        </svg><NavLink to="#!">Overview</NavLink>
                    </div>
                <div className="sidebar-payments-heading" >
                	 <p>Payments</p>
                	 <NavLink to="# !" activeClassName="">
                    <MDBListGroupItem>

                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.4286 7.00001V2.42858H13H5.57143H2.71429C1.76743 2.42858 1 1.66115 1 0.714294V12.7143C1 13.9766 2.02343 15 3.28571 15H16.4286V10.4286" stroke="#7F8FA4" stroke-miterlimit="10" stroke-linecap="square"/>
                        </svg><svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg"><span><svg width="14" height="5" viewBox="0 0 14 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2.14286V1H2.71429C1.76743 1 1 1.76743 1 2.71429C1 3.66114 1.76743 4.42857 2.71429 4.42857" stroke="#7F8FA4" stroke-miterlimit="10" stroke-linecap="square"/>
                </svg></span>
                            <path d="M7.14287 4.42857H3.14287C2.19602 4.42857 1.42859 3.66114 1.42859 2.71429C1.42859 1.76743 2.19602 1 3.14287 1H7.14287V4.42857Z" stroke="#7F8FA4" stroke-miterlimit="10" stroke-linecap="square"/>
                        </svg>

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
                   </div>

  				<div className="sidebar-order-list">
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
                   </div>
                   <div className='sidebar-profile'>
                    <NavLink to="# !" activeClassName="">
                        <i class="fas fa-user-tie mr-2"></i>
                       Merchant Profile
                    </NavLink>
                   </div>


        		</div>
        );
    }
}

export default SideBar;
