import React, { useEffect, useState } from 'react';
import './Candidates.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import axios from 'axios';
import noImg from "../../images/castnon.jpg"

const handleDragStart = (e) => e.preventDefault();



const Candidates = () => {

    const [candidates, setCandidates] = useState([])

    const items = candidates?.map((c) => (
        <div className="carouselItem text-black p-3">
            <img onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = noImg;
            }} src={c.avatar ? `${c.avatar}` : noImg} alt={c?.name} onDragStart={handleDragStart} className="w-100" />
            <h6 className="mt-3">{c?.name}</h6>
            <p className=''>{c?.title}</p>
        </div>
    ))
    const responsive = {
        0: {
            items: 3,
        },
        512: {
            items: 4
        },
        1024: {
            items: 6
        }
    }
    async function getCandidates() {
        let { data } = await axios.get("https://6251492bdfa31c1fbd6bcc26.mockapi.io/candidates");
        setCandidates(data);
    }

    useEffect(() => {
        getCandidates();
    }, [])

    return (
        <div className='Candidates text-center text-white py-5 mt-5'>
            <h6>FIND TOP TALENTS</h6>
            <h2>Explore Our Latest Candidates</h2>
            <p className='mt-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quasi aperiam error veritatis <br /> minus  vero perferendis dolores dolore placeat ut.</p>

            <div className="container">
                <AliceCarousel autoPlay responsive={responsive} infinite disableDotsControls mouseTracking items={items} />
            </div>
            <button className='btn btn-dark fw-bold px-4'>EXPLORE ALL</button>
        </div>
    )
}

export default Candidates