import React from 'react'
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.33564056191!2d31.22344491853406!3d30.059558098334296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1649676740154!5m2!1sen!2seg"  style={{border:0 , width:"100%",height:"100%"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Header