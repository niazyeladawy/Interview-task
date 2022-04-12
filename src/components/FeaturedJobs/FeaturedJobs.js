import React from 'react';
import './FeaturedJobs.css'

const FeaturedJobs = () => {
    return (
        <div className="FeaturedJobs">
            <h4>Featured Jobs</h4>
            <div className="featured__main border__main ">
                <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel">
                    <div className="carousel-inner p-3">
                        <div className="carousel-item active">
                            <img src="https://via.placeholder.com/384x170.png?text=Featured%20jobs" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-flex ">
                                <img src="https://via.placeholder.com/50x50.png?text=job" className='me-3' alt="" />
                                <div>
                                    <h5>Front-end Developer</h5>
                                    <p><span className='text-main'>tie labs</span> | aafa faasfaf f</p>
                                    <p className='text__grey'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis deserunt vel autem, porro animi cum?</p>
                                    <ul className='list-unstyled d-flex text__grey'>
                                        <li className='me-2'><i className="fa-solid fa-location-pin"></i> Cairo, Egypt</li>
                                        <li><i className="fa-solid fa-clock"></i> 8 hours ago</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                        <img src="https://via.placeholder.com/384x170.png?text=Featured%20jobs" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-flex ">
                                <img src="https://via.placeholder.com/50x50.png?text=job" className='me-3' alt="" />
                                <div>
                                    <h5>Front-end Developer</h5>
                                    <p><span className='text-main'>tie labs</span> | aafa faasfaf f</p>
                                    <p className='text__grey'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis deserunt vel autem, porro animi cum?</p>
                                    <ul className='list-unstyled d-flex text__grey'>
                                        <li className='me-2'><i className="fa-solid fa-location-pin"></i> Cairo, Egypt</li>
                                        <li><i className="fa-solid fa-clock"></i> 8 hours ago</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                        <img src="https://via.placeholder.com/384x170.png?text=Featured%20jobs" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-flex ">
                                <img src="https://via.placeholder.com/50x50.png?text=job" className='me-3' alt="" />
                                <div>
                                    <h5>Front-end Developer</h5>
                                    <p><span className='text-main'>tie labs</span> | aafa faasfaf f</p>
                                    <p className='text__grey'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis deserunt vel autem, porro animi cum?</p>
                                    <ul className='list-unstyled d-flex text__grey'>
                                        <li className='me-2'><i className="fa-solid fa-location-pin"></i> Cairo, Egypt</li>
                                        <li><i className="fa-solid fa-clock"></i> 8 hours ago</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex featured__controls p-3' >
                        <button className="carousel-control-prev me-2" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                        <button className='btn bg-main text-white ms-auto'>APPLY FOR THIS JOB</button>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default FeaturedJobs