import React from 'react'
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Card = () => {
  return (
    <>
      <div className="card">
        <div className="img-container">
          <img src="data:image/jpeg;base64,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" alt="" className='img' />
          <div className="like">
            <FontAwesomeIcon icon={["fas", "heart"]} className="like__icon" />
          </div>

        </div>
        <div className="content">
          <div className="description">
            <div className="title"> <h4> ElitShield Performance Men's jacket </h4> </div>
            <div className="price">
              <div className="curr-price">Rs. 300.00</div>
              <div className="old-price">Rs. 500.00</div>
            </div>
          </div>
          <div className="line"></div>
          <div className="sale-amount">
            <div className="sale">
              <progress value={9} max={10}

                className='progress-bar' />
            </div>
            <div className="sale-text">
              9/10 Sale
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card