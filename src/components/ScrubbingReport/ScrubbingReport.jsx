import React from 'react'
import './ScrubbingReport.css'
import DatePicker from '../../assets/images/datepicker.png'
import ProfileCard from '../ProfileCard/ProfileCard'
import "bootstrap-icons/font/bootstrap-icons.css";
const ScrubbingReport = () => {
  return (
    <div>
        <div className="row mt-30">
            {/* <div className="col-sm-6">
                <div className="card" style={{height:"300px"}}>
                    <div className="card-body">
                    <h5 className="card-title mt-20">Scrubbing Report</h5>
                    <div className="row">
                    <form className="entity-registration">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>DATE<span className="red">*</span></label>
                
                    <input type="text" placeholder="Select date" autoComplete="off"
                    maxLength="10"  style={{width:"300px"}}/>
                  <img alt="Airtel" className="logo-img-1 datePickerIcon" src={DatePicker}/>
                  
                  </div>
                  <small style={{color:"red"}}>*Note: Reports are available for (D-1) day.</small>
                  <div className="row">
                  <button className="btn btn-sm button" id="registerationButton" tabIndex="4">Search
                  </button>
                </div>
                </div>
                
              </form>
            </div>
                </div>
            </div>
        </div> */}
        <div className="col-sm-6">
        <ProfileCard/>
        </div>
    </div>
    </div>
  )
}

export default ScrubbingReport