import React,{useState,useEffect} from 'react'
import HeaderSubCard from '../HeaderSubCard/HeaderSubCard'
import './HeaderCard.css'
const HeaderCard = () => {
    const [headerData,setHeaderData] = useState([{}]);
    const headerTestData = [
        {
            "Name":"Headers",
            "Total":"5",
            "Approved":"5",
            "Pending":"0",
            "Rejected":"0"
        },
        {
            "Name":"Content Templates",
            "Total":"2",
            "Approved":"2",
            "Pending":"0",
            "Rejected":"0"
        },
        {
            "Name":"Consent Templates",
            "Total":"3",
            "Approved":"3",
            "Pending":"0",
            "Rejected":"0"
        }
    ]

    useEffect(()=>{
        setHeaderData(headerTestData);
    },[])
  return (
    <div>
        <div className="row mt-30">
            {headerData.map((header)=>(<HeaderSubCard key={header.Name} data={header}/>))}
            
    </div>
    </div>
  )
}

export default HeaderCard