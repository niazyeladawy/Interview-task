import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Grow } from '@mui/material';
import './Jobs.css'

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [tabVlue, setTabVlue] = useState("ALL JOBS");

    let currentDate = new Date();

    async function getCandidates() {
        let { data } = await axios.get("https://6251492bdfa31c1fbd6bcc26.mockapi.io/jobs");
        setJobs(data);
    }


    jobs?.map((j) => {
        j["hoursBetween"] = Math.floor(Math.abs(currentDate - new Date(j.createdAt)) / 36e5)
    })

    jobs?.map((j) => {
        if(j["hoursBetween"] < 24){
            j["hoursBetweenConverted"] =j["hoursBetween"]
        }
        else{
            j["hoursBetweenConverted"] = (j["hoursBetween"] /24).toFixed() + "days ago"
        }
    })


    jobs?.sort((a, b) => {
        return a.hoursBetween - b.hoursBetween;
    });

    let fourResults = jobs?.slice(0, 4);

    useEffect(() => {
        getCandidates();
    }, [])
    return (
        <div className='Jobs'>
            <div className="jobs__header d-flex justify-content-between">
                <p>We have <span className='text-main'>{jobs?.length}</span> potential jobs for you.</p>
                <p className='d-flex align-items-center'>Sort by:
                    <div className="dropdown">
                        <button className="btn bg-transparent dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Newset</a></li>
                        </ul>
                    </div>
                </p>
            </div>
            <div className='maincontent'>
                <Tabs value={tabVlue} indicatorColor="white" className="custom-tabs" onChange={(event, newValue) => setTabVlue(newValue)}>
                    <Tab label="ALL JOBS" value="ALL JOBS" className={tabVlue === "ALL JOBS" ? 'customTabs-item active' : 'customTabs-item'} />

                </Tabs>

                <div>
                    {
                        fourResults?.map((item, idx) => (
                            <>
                                {tabVlue === "ALL JOBS" ? (
                                    <div className="find__job" >
                                        <Grow in timeout={1000}>


                                            <div className="project-item" >
                                                <div className="jobitem d-flex justify-content-between align-items-center p-3">
                                                    <div>
                                                        <h5>{item.jobtitle}</h5>
                                                        <p><span className='text-main'>{item.companyName}</span> | {item.jobType}</p>
                                                    </div>
                                                    <p className='text__grey'><i class="fa-solid fa-location-pin"></i> {item.location}</p>
                                                    <p className='text__grey'><i class="fa-solid fa-clock"></i> {item.hoursBetweenConverted}</p>
                                                </div>

                                            </div>



                                        </Grow>
                                    </div>
                                ) : null}

                            </>
                        ))
                    }

                



                </div>
            </div>

        </div>
    )
}

export default Jobs