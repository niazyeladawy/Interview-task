import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Grow } from '@mui/material';
import './SearchJob.css'

const SearchJob = () => {
    const [tabVlue, setTabVlue] = useState("FIND A JOB");

    return (
        <div className='search__job '>


            <Tabs value={tabVlue} indicatorColor="white" className="custom-tabs" onChange={(event, newValue) => setTabVlue(newValue)}>
                <Tab label="FIND A JOB" value="FIND A JOB" className={tabVlue === "FIND A JOB" ? 'customTabs-item active' : 'customTabs-item'} />
                <Tab label={"FIND A RESUME"} value={"FIND A RESUME"} className={tabVlue === "FIND A RESUME" ? 'customTabs-item active' : 'customTabs-item'} />
            </Tabs>

            <div>

                {tabVlue === "FIND A JOB" ? (
                    <div className="find__job" >
                        <Grow in timeout={1000}>
                            <div className="project-item  shadow-sm rounded-3 overflow-hidden" >
                                <form action="">
                                    <div className="row">
                                        <div className='col-md-3'>
                                            <div className=" p-3 item">
                                                <label htmlFor="jobtitle" className="form-label fw-bold">JOB</label>
                                                <input placeholder='Job title, Keywords' type="text" className="form-control" id="jobtitle" aria-describedby="emailHelp" />
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div className=" p-3 item">
                                                <label htmlFor="city" className="form-label fw-bold">LOCATION</label>
                                                <input placeholder='City, Province or region' type="text" className="form-control" id="city" aria-describedby="emailHelp" />
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div className=" p-3 item">
                                                <label htmlFor="jobtitle" className="form-label fw-bold">CATEGORY</label>
                                                <select  className="form-select" aria-label="Default select example">
                                                    <option value="DEFAULT">Select industry</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div className=" p-3 item text-center">
                                                <button onClick={(e) => { e.preventDefault() }} type='submit' className='btn btn-dark w-100 search__job__button'><i className="fa-solid fa-magnifying-glass"></i> SEARCH</button>
                                            </div>
                                        </div>
                                    </div>

                                </form>

                            </div>
                        </Grow>
                    </div>
                ) : <div className="find__resume" >
                    <Grow in timeout={1000}>
                        <div className="project-item  shadow-sm rounded-3 overflow-hidden" >
                            <form action="">
                                <div className="row">
                                    <div className='col-md-3'>
                                        <div className=" p-3 item">
                                            <label htmlFor="resumetitle" className="form-label fw-bold">RESUME</label>
                                            <input placeholder='Resume title, Keywords' type="text" className="form-control" id="resumetitle" />
                                        </div>
                                    </div>
                                    <div className='col-md-3'>
                                        <div className=" p-3 item">
                                            <label htmlFor="city" className="form-label fw-bold">LOCATION</label>
                                            <input placeholder='City, Province or region' type="text" className="form-control" id="city" aria-describedby="emailHelp" />
                                        </div>
                                    </div>
                                    <div className='col-md-3'>
                                        <div className=" p-3 item">
                                            <label htmlFor="jobtitle" className="form-label fw-bold">CATEGORY</label>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Select industry</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-md-3'>
                                        <div className=" p-3 item text-center">
                                            <button onClick={(e) => { e.preventDefault() }} type='submit' className='btn btn-dark w-100 search__job__button'><i className="fa-solid fa-magnifying-glass"></i> SEARCH</button>
                                        </div>
                                    </div>
                                </div>

                            </form>

                        </div>
                    </Grow>
                </div>
                }



            </div>
        </div >

    )
}

export default SearchJob