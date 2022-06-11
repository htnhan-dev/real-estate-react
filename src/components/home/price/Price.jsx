import React from 'react'
import Heading from '../Heading'
import PriceCard from '../priceCard/PriceCard'
import './Price.css'

const Price = () => {
  return (
    <>
        <section className='price padding'>
        <div className='container'>
          <Heading title='Select Your Package' subtitle='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price