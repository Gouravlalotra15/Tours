import React from 'react'
import Tour from './Tour'
const Tours = ({tours,remove}) => {

    
  return (
    <section>
        <div className='title'>
        <h1>Our Tours</h1>
        <div className='title-underline'></div>
        </div>
        <div className='tours'>
        {
            tours.map((tour)=>{
                return <Tour key={tour.id} {...tour} remove={remove}/>
            })
        }
        </div>
    </section>
  )
}

export default Tours