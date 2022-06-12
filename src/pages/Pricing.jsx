import React from 'react'
import Back from '../components/Back'
import PriceCard from '../components/home/priceCard/PriceCard'
import img from '../images/pricing.jpg'

const Pricing = () => {
  return (
    <>
        <section className='pricing mb'>
        <Back name='30 days money back guarantee' title='No Extra Fees. Friendly Support' cover={img} />
        <div className='price container'>
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Pricing