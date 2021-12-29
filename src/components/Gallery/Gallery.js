import React from 'react'
import './Gallery.css'
import Blossoms from '../../assets/images/Blossoms.jpg'
import ball from '../../assets/images/ball.jpg'
import sailman from '../../assets/images/sailman.jpg'
import pink from '../../assets/images/pink.jpg'
import sist from '../../assets/images/sist.jpg'
import two from '../../assets/images/two.jpg'
import Family from '../../assets/images/Family.jpg'
import dev from '../../assets/images/dev.jpg'

const Gallery = () => {
    return (
        <>
        <div className="gallery">
        <div className="gallery-item">
            <img className="gallery-img" src={Blossoms}/>
        </div>
        <div className="gallery-item">
            <img className="gallery-img" src={ball}/>
        </div>
        <div className="gallery-item">
            <img className="gallery-img" src={pink}/>
        </div>
        <div className="gallery-item">
            <img className="gallery-img" src={sailman}/>
        </div>
        <div className="gallery-item">
            <img className="gallery-img" src={two}/>
        </div>
        <div className="gallery-item">
            <img className="gallery-img" src={sist}/>
        </div>
        <div className="gallery-item">
            <img className="gallery-img" src={Family}/>
        </div>
        <div className="gallery-item">
            <img className="gallery-img" src={dev}/>
        </div>
        </div>    
        </>
    )
}

export default Gallery
