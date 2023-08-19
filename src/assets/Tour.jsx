import React, { useState } from 'react'



const Tour = ({id,image,name,info,price,remove}) => {
    const[readMore,setReadMore]=useState(false)
  return (
    <article className='single-tour'>
        <img src={image} className='img' alt="ima"></img>
        <span className='tour-price'>${price}</span>
        <div className='tour-info'>
            <h4>{name}</h4>
            <p>
                {readMore?info:`${info.substring(0,200)}...`}
            <button type='submit' className="info-btn" onClick={()=>setReadMore(!readMore)}>{readMore?`Show Less`:`Read More`}</button></p>
            <button type="submit" className="btn btn-block delete-btn"onClick={()=>remove(id)}> Remove </button>
        </div>
    </article>
  )
}

export default Tour