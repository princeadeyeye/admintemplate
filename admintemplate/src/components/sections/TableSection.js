import React from 'react';
import { MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead, MDBRow, MDBCol } from 'mdbreact';

const TableSection = () => {
  return (
    <MDBRow className="mb-4">
        <p className='col-xl-12' id='p'>Payments</p>
        <MDBCol md="12"className="mb-4">
            <div className=" table-pagination">
                <p>Showing 20 <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 1L4.5 5L1 1" stroke="#1875F0"/>
                </svg>
              </p><p>out of 500 payments</p><span>
                <input type='text'  placeholder='Search Payments'/>
                  <select>
                    <option value=''>All</option>
                    <option value=''>Reconcilled</option>
                    <option value=''>Un-reconcilled</option>
                    <option value=''>Settled</option>
                    <option value=''>Unsettled</option>
                  </select>
                  </span>
                  </div>
                  </MDBCol>
          <MDBCol md="12">
              <MDBCard>
                  <MDBCardBody>
                    <MDBTable hover>
                      <MDBTableHead color="blue-grey lighten-4">
                        <tr>
                          <th>Item Type</th>
                          <th>Price</th>
                          <th>Transaction No</th>
                          <th>Time</th>
                          <th>Status</th>
                        </tr>
                      </MDBTableHead>
                      <MDBTableBody >
                        <tr>
                           <td><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="18" cy="18" r="18" fill="#7F8FA4"/>
                          </svg>
                          Apple Mac Book 15” 250 SSD 12GB</td>
                          <td>$73430</td>
                          <td>1234567890</td>
                          <td>12:30</td>
                          <td><svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="4.5" cy="4.5" r="4.5" fill="#27AE60"/>
                              </svg>
                              Settled</td>
                          </tr>
                        <tr className='tables'>
                           <td><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="18" cy="18" r="18" fill="#7F8FA4"/>
                          </svg>
                          Apple Mac Book 15” 250 SSD 12GB</td>
                          <td>$73430</td>
                          <td>1234567890</td>
                          <td>12:30</td>
                          <td><svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4.5" cy="4.5" r="4.5" fill="#27AE60"/>
                            </svg>
                            Reconcilled</td>
                        </tr>
                        <tr>
                           <td><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="18" cy="18" r="18" fill="#7F8FA4"/>
                          </svg>
                          Apple Mac Book 15” 250 SSD 12GB</td>
                          <td>$73430</td>
                          <td>1234567890</td>
                          <td>12:30</td>
                          <td><svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4.5" cy="4.5" r="4.5" fill="#27AE60"/>
                                </svg>
                                Pending</td>
                                                        </tr>
                        <tr>
                          <td><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="18" cy="18" r="18" fill="#7F8FA4"/>
                          </svg>
                          Apple Mac Book 15” 250 SSD 12GB</td>
                          <td>$73430</td>
                          <td>1234567890</td>
                          <td>12:30</td>
                          <td><svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="4.5" cy="4.5" r="4.5" fill="#27AE60"/>
                              </svg>
                              Reconcilled</td>
                        </tr>
                      </MDBTableBody>
                    </MDBTable>
                  </MDBCardBody>
              </MDBCard>
          </MDBCol>
          <MDBCol className="">
            <p>Showing 1 to 10 of 500 entries</p>
              <span id='i'>Previous </span>
              <span id= "j">1</span>
              <span id="l">2</span>
              <span id = "k">Next</span>
          </MDBCol>
      </MDBRow>
  )
}

export default TableSection;

