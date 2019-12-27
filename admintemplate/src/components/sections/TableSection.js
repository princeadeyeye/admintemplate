import React from 'react';
import { MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead, MDBRow, MDBCol } from 'mdbreact';

const TableSection = () => {
  return (
    <MDBRow className="mb-4">
          <MDBCol md="12">
              <MDBCard>
              <div className='header'>
                      <p>Payments</p>
                      </div>
              <div>
                <p>Showing</p><span>20</span>
                <span><input type='text'  placeholder=''Search Payments/></span>
                <span>
                  <select>
                    <option value='All'></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                    <option value=''></option>
                  </select>
                </span>
              </div>
                  <MDBCardBody>

                    <MDBTable hover>
                      <MDBTableHead color="blue-grey lighten-4">
                        <tr>
                          <th>#</th>
                          <th>First</th>
                          <th>Last</th>
                          <th>Handle</th>
                        </tr>
                      </MDBTableHead>
                      <MDBTableBody>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </MDBTableBody>
                    </MDBTable>
                  </MDBCardBody>
              </MDBCard>
          </MDBCol>
      </MDBRow>
  )
}

export default TableSection;

