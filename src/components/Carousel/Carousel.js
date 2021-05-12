import React from 'react'
import brother from '../../assets/images/brother.jpg'
import blueflowers from '../../assets/images/blueflowers.jpg'
import country from '../../assets/images/country.jpg'
import lavand from '../../assets/images/lavand.jpg'
import dundel from '../../assets/images/dundel.jpg'
import bbb from '../../assets/images/bbb.jpg'
import sibli from '../../assets/images/sibli.jpg'
import anne from '../../assets/images/anne.jpg'
import sis from '../../assets/images/sis.jpg'
import './Carousel.css'
const Carousel = () => {
    return (
        <>
        <section className="slideshow">
            <div className="content">
            <div className="content-carrousel">
<figure className="shadow"><img src={brother} className="carousel"/></figure>
<figure className="shadow"><img src={blueflowers} className="carousel"/></figure>              
<figure className="shadow"><img src={country} className="carousel"/></figure>
<figure className="shadow"><img src={lavand} className="carousel"/></figure>
<figure className="shadow"><img src={dundel} className="carousel"/></figure>
<figure className="shadow"><img src={bbb} className="carousel"/></figure>
<figure className="shadow"><img src={sibli} className="carousel"/></figure>
<figure className="shadow"><img src={anne} className="carousel"/></figure>
<figure className="shadow"><img src={sis} className="carousel"/></figure>
              </div>
            </div>
           

        </section>
            
        </>
    )
}

export default Carousel
