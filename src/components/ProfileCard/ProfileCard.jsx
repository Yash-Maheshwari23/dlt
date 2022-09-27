import React from 'react'
import './ProfileCard.css'
const ProfileCard = () => {
  return (
    <div>
        
                <div className="card profile-card" style={{height:"300px"}}>
                    <div className="card-body">
                    <h5 className="card-title mt-15">Saumya1@gmail.com</h5>
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
                <div className="progress mt-15 ml-20" style={{width:"300px"}}>
                    <div className="progress-bar " role="progressbar" style={{width: "100%"}} ></div>
                    
                </div>
                <p className='progress-text'>100% Complete</p>
                <h5 className="card-title mt-15 ml-20">Profile Details</h5>
                
            </div>
            <p className='profile-details'><i className="bi bi-person" style={{marginRight:"3px"}}/>Name: <span className='ml-10'>Saumya Sharma</span></p>
            <p className='profile-details'><i className="bi bi-envelope" style={{marginRight:"3px"}}/>Email: <span className='ml-10'>Saumya1@gmail.com</span></p>
            <p className='profile-details'><i className="bi bi-telephone" style={{marginRight:"3px"}}/>Contact: <span className='ml-9'>9633247624</span></p>
            <h5 className="card-title mt-15 ml-10">Business Details</h5>
            <p className='profile-details'><i className="bi bi-credit-card" style={{marginRight:"3px"}}/>PAN: <span className='ml-20'>ABCDE2345K</span></p>
            <p className='profile-details'><i className="bi bi-credit-card" style={{marginRight:"3px"}}/>GST: <span className='ml-20'>27ASDFGJ3478394</span></p>
                </div>
            </div>
        </div>
    
  )
}

export default ProfileCard