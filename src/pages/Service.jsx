import React from 'react'
import Back from '../components/Back'
import img from '../images/services.jpg'
import FeaturedCard from '../components/home/featuredCard/FeaturedCard'


const Service = () => {
  return (
    <>
        <section className='services mb'>
            <Back name='Services' title='Services -All Services' cover={img} />
            <div className='featured container'>
            <FeaturedCard />
            </div>
        </section>
    </>
  )
}

export default Service