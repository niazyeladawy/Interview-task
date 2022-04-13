import React from 'react';
import './SrartSearching.css'

const StartSearching = () => {
    return (
        <div className='StartSearching mb-3'>
            <div className='d-flex align-items-center  start__searching__header' >
                
                <i className="fa-solid fa-magnifying-glass p-3"></i>
                <p className='m-0 p-3'>Start Searching</p>
            </div>
            <div className=' start__searching__form'>
                <form action="">
                    <div className=" p-3 item">
                        <label htmlFor="resumetitle" className="form-label fw-bold">RESUME</label>
                        <input placeholder='Resume title, Keywords' type="text" className="form-control" id="resumetitle" />
                    </div>
                    <div className=" p-3 item">
                        <label htmlFor="city" className="form-label fw-bold">LOCATION</label>
                        <input placeholder='City, Province or region' type="text" className="form-control" id="city" aria-describedby="emailHelp" />
                    </div>
                    <div className=" p-3 item">
                        <label htmlFor="jobtitle" className="form-label fw-bold">CATEGORY</label>
                        <select className="form-select" aria-label="Default select example">
                            <option value="DEFAULT">Select industry</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="accordion" id="contractaccordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    Contract Type
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#contractaccordion">
                                <div className="accordion-body">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Fixed Bid/Fee
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            Time and Materials Contracts
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault3">
                                            Fixed Budget
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault4">
                                            Capped Budget With Accelerated Bonus
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="accordion" id="specialismaccordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Specialisms
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#specialismaccordion">
                                <div className="accordion-body">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="RadioDefault" id="RadioDefault1" />
                                        <label className="form-check-label" htmlFor="RadioDefault1">
                                            Field 1
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="RadioDefault" id="RadioDefault2" />
                                        <label className="form-check-label" htmlFor="RadioDefault2">
                                            Field 2
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="RadioDefault" id="RadioDefault3" />
                                        <label className="form-check-label" htmlFor="RadioDefault3">
                                            Field 3
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="RadioDefault" id="RadioDefault4" />
                                        <label className="form-check-label" htmlFor="RadioDefault4">
                                            Field 4
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='p-3'>
                        <button onClick={(e) => { e.preventDefault() }} type='submit' className='btn btn-dark w-100 search__job__button '><i className="fa-solid fa-magnifying-glass"></i> SEARCH</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default StartSearching