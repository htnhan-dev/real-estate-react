import React from 'react'
import Heading from '../../Heading'
import RecentCard from '../recentCard/RecentCard'
import './Recent.css'

const Recent = () => {
  return (
    <>
        <section className="recent padding">
            <div className="container">
                <Heading title="Recent Property Listed" subtile="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur possimus, cupiditate fuga placeat voluptatibus ipsam tenetur totam nisi beatae sapiente sit, dolorum a, aliquam molestias dicta porro sequi quasi maiores."/>
                <RecentCard />
            </div>
        </section>
    </>
  )
}

export default Recent