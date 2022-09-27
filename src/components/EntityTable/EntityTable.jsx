import React from 'react'
import './EntityTable.css'
const EntityTable = () => {
  return (
    <div>
        <div className="card mb-3 mt-30" >
        <div className="card-body">
            {/* <h5 className="card-title">Info card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            <div className="row">
              <div className="col-sm-3">
                <div className="form-group form-inline">
                  <input type="text" placeholder="Search Entity Name" />
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group form-inline">
                  <input type="text" placeholder="Search Reference Id" />
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group form-inline">
                  <input type="text" placeholder="Search Registration Id" />
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group form-inline">
                  <input type="text" placeholder="Search Creation Date" />
                </div>
              </div>
              <div className='col-sm-12'>
              <table className="table table-hover fs-12 table-striped ml-08 entity-table">
              <thead>
                <tr>
                  <th>Sl. No.</th>
                  <th>Entity Name</th>
                  <th>Type</th>
                  <th>Reference Id</th>
                  <th>Status</th>
                  <th>Creation Date</th>
                  <th>Registration Id</th>
                  <th>Entity Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>
                        1.
                    </td>
                    <td>
                        neworg
                    </td>
                    <td>
                        ENTERPRISE
                    </td>
                    <td>
                        AIR0332428885
                    </td>
                    <td>
                        REGISTERED
                    </td>
                    <td>
                        Oct 09, 2020
                    </td>
                    <td>
                    1001064046237011899
                    </td>
                    <td>
                        View Entity Details
                    </td>
                </tr>
              </tbody>
              </table>
              
              </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default EntityTable