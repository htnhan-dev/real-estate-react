import React from 'react'
import FeaturedCard from '../featuredCard/FeaturedCard'
import Heading from '../Heading'

import './Featured.css'

const Featured = () => {
  return (
    <>
        <section className="featured background">
            <div className="container">
                <Heading title="Featured Property Types" subtile="Find All Type of Property."/>
                <FeaturedCard />
            </div>
        </section>
    </>
  )
}

export default Featured