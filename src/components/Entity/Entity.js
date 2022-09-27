import React from 'react'
import EntityTable from '../EntityTable/EntityTable';
import HeaderCard from '../HeaderCard/HeaderCard';

 import LeftBar from '../Leftbar/LeftBar';
import NoteCard from '../NoteCard/NoteCard';

import ScrubbingReport from '../ScrubbingReport/ScrubbingReport';
import './Entity.css';
const Entity = () => {
  return (
    <div>
        <div className="main-content-div col-sm-12">
  {/* <!--Row with two equal columns--> */}
        <div className="row row1">
        <div className="col-sm-3 ml-0 leftbar1" style={{backgroundColor:"white"}}>
            <LeftBar/>
        </div>
        <div className="col-sm-9 main-content-panel">
          <div className="pb-80">
            <div className="principal-entity pt-10">
            <h4>Welcome to Airtel Commercial Communications</h4>
            <HeaderCard/>
            <EntityTable/>
            <NoteCard/>
            <ScrubbingReport/>
            </div>
            </div>

        </div>
        
    </div>
    </div>
    </div>
  )
}

export default Entity