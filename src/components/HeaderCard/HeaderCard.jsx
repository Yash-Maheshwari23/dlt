import React from 'react'
import './HeaderCard.css'
const HeaderCard = () => {
  return (
    <div>
        <div className="row mt-30">
            <div className="col-sm-4">
                <div className="card" style={{height:"150px"}}>
                    <div className="card-body">
                    <h5 className="card-title " style={{textAlign:"center"}}>5</h5>
                    <p className="card-text " style={{textAlign:"center"}}>HEADERS</p>
                    <div className='row mt-20 mr-10'>
                        <div className='col-sm-4'>
                            <div className='card' style={{height:"50px" ,width:"80px",backgroundColor:"lightgreen"}}>
                            <div className="card-body">
                                <p className="card-title sub-card" style={{textAlign:"center"}}>APPROVED</p>
                                <p className="card-text sub-card" style={{textAlign:"center"}}>5</p>
                            </div>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='card' style={{height:"50px",width:"80px",backgroundColor:"#dcdc77"}}>
                            <div className="card-body">
                                <p className="card-title sub-card" style={{textAlign:"center"}}>PENDING</p>
                                <p className="card-text sub-card" style={{textAlign:"center"}}>0</p>
                            </div>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='card' style={{height:"50px",width:"80px",backgroundColor:"#dc9077"}}>
                            <div className="card-body">
                                <p className="card-title sub-card" style={{textAlign:"center"}}>REJECTED</p>
                                <p className="card-text sub-card " style={{textAlign:"center"}}>0</p>
                            </div>
                            </div>
                        </div>

                        </div>
                </div>
            </div>
        </div>
        <div className="col-sm-4">
            <div className="card" style={{height:"150px"}}>
                <div className="card-body">
                <h5 className="card-title" style={{textAlign:"center"}}>2</h5>
                <p className="card-text" style={{textAlign:"center"}}>CONTENT TEMPLATES</p>
                <div className='row mt-20 mr-10'>
                        <div className='col-sm-4'>
                            <div className='card' style={{height:"50px" ,width:"80px",backgroundColor:"lightgreen"}}>
                            <div className="card-body">
                                <p className="card-title sub-card" style={{textAlign:"center"}}>APPROVED</p>
                                <p className="card-text sub-card" style={{textAlign:"center"}}>5</p>
                            </div>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='card' style={{height:"50px",width:"80px",backgroundColor:"#dcdc77"}}>
                            <div className="card-body">
                                <p className="card-title sub-card" style={{textAlign:"center"}}>PENDING</p>
                                <p className="card-text sub-card" style={{textAlign:"center"}}>0</p>
                            </div>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='card' style={{height:"50px",width:"80px",backgroundColor:"#dc9077"}}>
                            <div className="card-body">
                                <p className="card-title sub-card" style={{textAlign:"center"}}>REJECTED</p>
                                <p className="card-text sub-card " style={{textAlign:"center"}}>0</p>
                            </div>
                            </div>
                        </div>

                        </div>
            </div>
        </div>
    </div>
    <div className="col-sm-4">
            <div className="card" style={{height:"150px"}}>
                <div className="card-body">
                <h5 className="card-title" style={{textAlign:"center" }}>1</h5>
                <p className="card-text" style={{textAlign:"center"}}>CONSENT TEMPLATES</p>
                <div className='row mt-20 mr-10'>
                        <div className='col-sm-4'>
                            <div className='card' style={{height:"50px" ,width:"80px",backgroundColor:"lightgreen"}}>
                            <div className="card-body">
                                <p className="card-title sub-card" style={{textAlign:"center"}}>APPROVED</p>
                                <p className="card-text sub-card" style={{textAlign:"center"}}>5</p>
                            </div>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='card' style={{height:"50px",width:"80px",backgroundColor:"#dcdc77"}}>
                            <div className="card-body">
                                <p className="card-title sub-card" style={{textAlign:"center"}}>PENDING</p>
                                <p className="card-text sub-card" style={{textAlign:"center"}}>0</p>
                            </div>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='card' style={{height:"50px",width:"80px",backgroundColor:"#dc9077"}}>
                            <div className="card-body">
                                <p className="card-title sub-card" style={{textAlign:"center"}}>REJECTED</p>
                                <p className="card-text sub-card " style={{textAlign:"center"}}>0</p>
                            </div>
                            </div>
                        </div>

                        </div>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default HeaderCard