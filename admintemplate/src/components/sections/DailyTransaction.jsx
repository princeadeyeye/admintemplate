import React from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBRow, MDBCol, MDBCardText } from 'mdbreact';

const DailyTransaction = () => {
  return (
    <MDBRow className="mt-3">
        <MDBCol xl="3" md="6" className="mb-4">
          <MDBCard className="cascading-admin-card">
              <div className="dashboard-admin-card">
              <svg width="64" height="21" viewBox="0 0 64 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 11.1939L9.85714 20.2551L28.0376 14.9694L42.4887 7.79592L50.8797 11.1939L63 1" stroke="#0294FF"/>
              </svg>
                  <p>Daily Transaction Volume</p>
                  <h4>
                    <strong>2,342</strong>
                  </h4>

              </div>
            </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
              <div className="dashboard-admin-card">
              <svg width="64" height="21" viewBox="0 0 64 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 11.1939L9.85714 20.2551L28.0376 14.9694L42.4887 7.79592L50.8797 11.1939L63 1" stroke="#0294FF"/>
              </svg>

                  <p>Daily Transaction Value</p>
                  <h4>
                    <strong>₦4,000,000</strong>
                  </h4>
              </div>
            </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
              <div className="dashboard-admin-card">
              <svg width="64" height="21" viewBox="0 0 64 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 11.1939L9.85714 20.2551L28.0376 14.9694L42.4887 7.79592L50.8797 11.1939L63 1" stroke="#0294FF"/>
              </svg>
                  <p>Daily Transaction Volume</p>
                  <h4>
                    <strong>452,000</strong>
                  </h4>
              </div>
            </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
              <div className="dashboard-admin-card">
              <svg width="64" height="21" viewBox="0 0 64 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 11.1939L9.85714 20.2551L28.0376 14.9694L42.4887 7.79592L50.8797 11.1939L63 1" stroke="#0294FF"/>
              </svg>
                  <p>Total Transaction Value</p>
                  <h4>
                    <strong>₦4,000,000</strong>
                  </h4>
              </div>
            </MDBCard>
        </MDBCol>
      </MDBRow>
  )
}

export default DailyTransaction;

