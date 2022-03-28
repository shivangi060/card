import React from 'react'
import './Card.css'
function Card({imageUrl,name,des,price}) {
  return (
    <div className='card-container'>
{/* <h1>Card</h1> */}
<div className='image-container'>
    <img src={imageUrl} alt=''/>
</div>
<div className='card-content'>
<div className='card-name'>
<h3>{name}</h3>
</div>
<div>
    <h2>{price}</h2>
</div>
<div className='card-des'>
<p>{des}</p>
</div>
</div>

<div className='btn'>
    <button>
        <a>
            Add to Card
        </a>
    </button>
</div>


    </div>
  )
}

export default Card