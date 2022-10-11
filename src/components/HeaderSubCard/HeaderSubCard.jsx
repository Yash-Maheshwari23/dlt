import React from 'react'
import './HeaderSubCard.css'
const HeaderSubCard = (props) => {
const {Name,Total,Approved,Pending,Rejected}=props.data;
  return (
    <div className="col-sm-4">
                <div className="card header-card" style={{height:"150px"}}>
                    <div className="card-body">
                    <h5 className="card-title " style={{textAlign:"center"}}>{Total}</h5>
                    <p className="card-text " style={{textAlign:"center"}}>{Name}</p>
                    <div className='row mt-20 mr-10'>
                        <div className='col-sm-4'>
                            <div className='header-card card ' style={{height:"50px" ,width:"80px",backgroundColor:"lightgreen"}}>
                            <div className="card-body">
                                <p className="card-title sub-card" style={{textAlign:"center"}}>APPROVED</p>
                                <p className="card-text sub-card" style={{textAlign:"center"}}>{Approved}</p>
                            </div>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='card header-card' style={{height:"50px",width:"80px",backgroundColor:"#dcdc77"}}>
                            <div className="card-body">
                                <p className="card-title sub-card" style={{textAlign:"center"}}>PENDING</p>
                                <p className="card-text sub-card" style={{textAlign:"center"}}>{Pending}</p>
                            </div>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='card header-card' style={{height:"50px",width:"80px",backgroundColor:"#dc9077"}}>
                            <div className="card-body">
                                <p className="card-title sub-card" style={{textAlign:"center"}}>REJECTED</p>
                                <p className="card-text sub-card " style={{textAlign:"center"}}>{Rejected}</p>
                            </div>
                            </div>
                        </div>

                        </div>
                </div>
            </div>
        </div>
  )
}

export default HeaderSubCard