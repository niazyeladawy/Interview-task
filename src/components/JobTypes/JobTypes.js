import React from 'react';
import './Jobtypes.css'

const JobTypes = () => {
    return (
        <div className='JobTypes'>
            <div className="row">
                <div className="col-md-4">
                    <div className="item d-flex align-items-center p-3">
                        <i className="fa-regular fa-building fa-2x me-3"></i>
                        <div>
                            <h6>Construction & Build</h6>
                            <p className='m-0'>7 open positions</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="item d-flex align-items-center p-3">
                        <i className="fa-solid fa-book-open fa-2x me-3"></i>
                        <div>
                            <h6>Education & Training</h6>
                            <p className='m-0'>7 open positions</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="item d-flex align-items-center p-3">
                        <i className="fa-solid fa-chart-column fa-2x me-3"></i>
                        <div>
                            <h6>Accounting & Finance</h6>
                            <p className='m-0'>7 open positions</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="item d-flex align-items-center p-3">
                        <i className="fa-regular fa-heart fa-2x me-3"></i>
                        <div>
                            <h6>Healthcare & Beauty</h6>
                            <p className='m-0'>7 open positions</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="item d-flex align-items-center p-3">
                        <i className="fa-solid fa-car fa-2x me-3"></i>
                        <div>
                            <h6>Cars & Automotive</h6>
                            <p className='m-0'>7 open positions</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="item d-flex align-items-center p-3">
                        <i className="fa-solid fa-laptop-code fa-2x me-3"></i>
                        <div>
                            <h6>Web Development</h6>
                            <p className='m-0'>7 open positions</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="row">
            <div className='col-md-6'>
                    <div className="item bg-dark text-white">
                        <div className='d-flex align-items-center  jobtypes__item__header text-white' >
                            <i className="fa-solid fa-paper-plane p-3"></i>
                            <p className='m-0 px-3'>Subscribe Our News</p>
                        </div>
                        <div className='p-3'>
                            <p className='my-3 '>subscribe to our news letter to get the latest jobs postes, candidates and latest news</p>
                            <form action="">
                                <div className='input__div d-flex align-items-center p-2'>
                                    <i className="fa-solid fa-envelope"></i>
                                    <input type="email" className="form-control bg-dark border-0" placeholder='Enter Your Email' />
                                </div>
                                <button onClick={(e) => { e.preventDefault() }} type='submit' className='btn my-4 w-100 search__job__button'>SUBSCRIBE</button>
                            </form>

                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                <div className="item bg-twitter text-white h-100">
                        <div className='d-flex align-items-center  jobtypes__item__header text-white' >
                            <i className="fa-brands fa-twitter p-3"></i>
                            <p className='m-0 px-3'>Latest Tweets</p>
                        </div>
                        <div className='p-3'>
                            <span className='bg-dark  px-3 my-3 d-inline-block'>@fsdg</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ducimus porro quisquam dignissimos facere eum maxime quae incidunt. Enim aliquid ipsa blanditiis eum eaque quaerat placeat eos magnam magni cum?</p>
                            <div className='tweet__time d-flex align-items-center'>

                            <i className="fa-solid fa-clock text-white me-2"></i>
                            <span>8 hours ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobTypes