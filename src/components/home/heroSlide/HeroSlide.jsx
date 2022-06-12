import React from 'react'
import Heading from '../../Heading'

import './HeroSlide.css'

const HeroSlide = () => {
  return (
    <>
        <section className="heroslide">
            <div className="container">
                <Heading title="Search Your Next Home" subtile="Find new & featured property located in your city."/>
                <form action="" className="flex">
                    <div className="box">
                        <span>City Street</span>
                        <input type="text" placeholder="Location" />
                    </div>
                    <div className="box">
                        <span>Property Type</span>
                        <input type="text" placeholder="Property Type" />
                    </div>
                    <div className="box">
                        <span>Price Range</span>
                        <input type="text" placeholder="Price Range" />
                    </div>
                    <div className="box">
                        <h4>Advance Filter</h4>
                    </div>
                    <button className='btn'>
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </div>
        </section>
    </>
  )
}

export default HeroSlide