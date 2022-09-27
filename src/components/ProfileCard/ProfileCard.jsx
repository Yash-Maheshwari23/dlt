import React from 'react'
import './ProfileCard.css'
const ProfileCard = () => {
  return (
    <div>
        
                <div className="card profile-card" style={{height:"300px"}}>
                    <div className="card-body">
                    <h5 className="card-title mt-15">Account Details</h5>
                    <div className="row">
                    {/* <form className="entity-registration">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>DATE<span className="red">*</span></label>
                
                    <input type="text" placeholder="Select date" autoComplete="off"
                    maxLength="10"  style={{width:"300px"}}/>
                  <img alt="Airtel" className="logo-img-1 datePickerIcon"/>
                  
                  </div>
                  <small style={{color:"red"}}>*Note: Reports are available for (D-1) day.</small>
                  <div className="row">
                  <button className="btn btn-sm button" id="registerationButton" tabIndex="4">Search
                  </button>
                </div>
                </div>
                
              </form> */}
              
                
            </div>
            <p className='profile-details'>Entity Name: <span className='ml-35'>neworg</span></p>
            <p className='profile-details'>Type: <span className='ml-80'>ENTERPRISE</span></p>
            <p className='profile-details'>Reference ID: <span className='ml-30'>AIR0332428885</span></p>
            <p className='profile-details'>Status: <span className='ml-70'>Registered</span></p>
            <p className='profile-details'>Creation Date: <span className='ml-25'>Oct 09, 2020</span></p>
            <p className='profile-details'>Registration ID: <span className='ml-20'>1001064046237011899</span></p>
                </div>
                <div className="row">
                  <button className="btn btn-sm button1" id="registerationButton" tabIndex="4">View Entity Details
                  </button>
                </div>
            </div>
        </div>
    
  )
}

export default ProfileCard