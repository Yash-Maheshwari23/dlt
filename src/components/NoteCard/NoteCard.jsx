import React from 'react'

const NoteCard = () => {
  return (
    <div>
        <div className="card text-dark bg-info mb-3 mt-30" >
        <div className="card-header">Notes</div>
        <div className="card-body">
            {/* <h5 className="card-title">Info card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            <ol className='card-text ml-0'>
                <li >1. Upload your KYC documents. Refer document checklist in <b>Sample/help documents</b> tab.</li>
                <li >
                  2. To download the Registration certificate, it is mandatory to register atleast one SMS header/ telephone number.
                </li>
                <li >3. Refer Airtel Bank details for registration fee and security deposit (NEFT/Cheque/DD) in <b>Sample/help documents</b> tab.</li>
                <li >4. For any clarifications please write to us at <a href="mailto: telemarketer.helpline@airtel.com">telemarketer.helpline@airtel.com</a>.</li>

              </ol>
              <div className="fs-12 mt-30 mb-20">
              <strong>**You have whitelisted following <a href='10.222.196.223'>10.222.196.223</a> IP's. In future, consent uploading shall be permissible from these registered IP's only.</strong>
            </div>
        </div>
        </div>
    </div>
  )
}

export default NoteCard